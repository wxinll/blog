var reslut = `html{
	background: #eee;
}
.notepad{
	border: 1px solid red;
	padding: 10px;
	width: 45vw;
	height: 90vh;
	margin: 1em;
	float: left;
}
#paper{
	border: 1px solid green;
	position: fixed;
	width: 45vw;
	right: 0;	
	top: 0;
}`
var n = 0
var style = document.getElementsByTagName('style')[0]
var id = setInterval(function(){
	n += 1
	notepad.innerHTML = reslut.slice(0,n)
	style.innerHTML = reslut.slice(0,n)
	if (n > reslut.length){
		clearInterval(id)
		writeIntro()
	}
},10)

function writeIntro() {
	var content =`简历
姓名
熟悉JavaScript、CSS`
	var n = 0
	var id = setInterval(() => {
		n += 1
		paper.innerHTML = content.slice(0, n)
		console.log(n)
		if (n > content.length) {
			clearInterval(id)
		}
	}, 10)
}