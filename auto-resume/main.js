var code1 = `
/*loading success..........*/

/*加个过渡动画*/
*{
	transition: all 0.5s;
}

/*加个背景色*/
html{
	background: #eee;
}

/*给代码区加点样式*/
.notepad{
	border: 1px solid red;
	padding: 10px;
	width: 45vw;
	height: 90vh;
	margin: 1em;
	float: left;
	font-size: 1.1rem;
	overflow: auto;
}

/*让代码带点颜色*/
.token.property{
  color: #905;
}
.token.selector{
  color: #690;
}
.token.punctuation{
  color: #999;
}
/*加个3D效果*/
html{
	perspective: 1000px;
}
.notepad{
	position: absolute;
	top: 0;
	left: 0;
	transform: rotateY(10deg) translateZ(-100px);
}

/*代码框写的差不多了，为添加简历做准备吧*/
#paper{
	border: 1px solid green;
	position: fixed;
	right: 0;	
	top: 0;
	width: 45vw;
	height: 90vh;
	background-color: white;
}

/*开始在右边写简历了*/
`
var content1 =`# 简历
## 姓名 

XXX

## 职位

前端工程师

## 技能

- 熟悉JavaScript
- HTML
- CSS

## 联系方式

- 邮箱： xxxxx@live.cn
- phone: 18633333333
aaaa`
var code2 = `
/*调整一下简历的样式*/
.resume{
	margin: 1em;
	padding: 10px;
}
.resume pre{
	line-height: 1.5em;	
}`
var code3 = `
/*用mark.js把简历内容转换为HTML*/
`
var code4 = `
/*给HTML添加点样式*/
.mdHtml{
	line-height: 2.5rem;
}
.mdHtml h1{
	text-align: center;
}
`

var style = document.getElementsByTagName('style')[0]
writeCode('',code1,()=>{
	writeInPaper('',content1,()=>{
		writeCode(code1,code2,()=>{
			writeCode(code1+code2,code3,()=>{
				replacePreWithHtml(()=>{
					writeCode(code1+code2+code3,code4)
				})
			})
		})
	})
})

function writeCode(pre,now,callback) {
	var n = pre.length
	var content = pre + now

	var id = setInterval(function() {
		n += 1
		notepad.innerHTML = content.slice(0, n)
		notepad.innerHTML = Prism.highlight(notepad.innerHTML, Prism.languages.css, 'css');
		style.innerHTML = content.slice(0, n)

		notepad.scrollTop = notepad.scrollHeight

		if (n > content.length) {
			clearInterval(id)
			callback.call()
		}
	}, 10)
}

function writeInPaper(pre,now,callback) {
	var n = 0
	var content = pre + now
	var domPaper = document.querySelector('#paper pre')
	var id = setInterval(() => {
		n += 1
		domPaper.innerHTML = content.slice(0, n)
		if (n > content.length) {
			clearInterval(id)
			callback.call()
		}
	}, 10)
}

function replacePreWithHtml(callback) {
	var div = document.createElement('div')
	div.className = 'mdHtml'
	div.innerHTML = marked(content1)
	var pre = document.querySelector('#paper pre')
	pre.replaceWith(div)
	callback.call()
}
