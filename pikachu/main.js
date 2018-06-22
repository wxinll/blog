var code = `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /*准备一个画板，画上颜色 */
  .preview-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
    height: 50vh;	
  }
  .pikachu-wrapper{
    position: relative;
    width: 100vw;
    height: 165px;
    padding: 0px;
  }

  /*画鼻子*/
  .nose{
    border: 12px solid;
    border-color: black transparent transparent;
    border-radius: 11px;
    width: 0;
    position: absolute;
    left: 50%;
    margin-left: -12px;
    top: 28px;
  }

  /*皮卡丘的眼睛*/
  .eye{
      width: 49px;
      height: 49px;
      background: #2E2E2E;
      position: absolute;
      border-radius: 50%;
      border: 2px solid #000000;    
  }
  .eye.left{
      right: 50%;
      margin-right: 90px;
  }
  .eye.right{
      left: 50%;
      margin-left: 90px;
  }
  .eye::before{
    content: '';
    display: block;
    background-color: #eee;
    border-radius:50%;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 6px;
    top: 5px;
  }

  /*画一张脸*/
  .face{
    width: 68px;
    height: 68px;
    background-color: red;
    border-radius: 40px;
    border: 2px solid black;
    position: absolute;
    top: 85px;
  }
  .face.left{
    right: 50%;
    margin-right: 120px;
  }
  .face.right{
    left: 50%;
    margin-left: 120px;
  }

  /*画一个上嘴唇*/
  .upperLip{
    position: absolute;
    width: 80px;
    height: 25px;
    border: 2px solid black;
    border-top: none;
    top: 50px;
    background: #FEE433;
    z-index: 1;
  }
  .upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-right: none;
    transform: rotate(-20deg);
  }
  .upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-left: none;
    transform: rotate(20deg);
  }

  /*画一画皮卡丘的嘴巴*/
  .lowerLip-wrapper{
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 110px;
    width: 300px;
    margin-left: -150px;
    overflow: hidden;
  }
  .lowerLip{
    width: 200px;
    height: 2000px;
    border: 2px solid black;
    border-radius: 120px/1000px;
    background: #990513;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }
  /*加上一个舌头*/
  .lowerLip::before{
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: 0px;
    width: 80px;
    height: 80px;
    background: #FC4A62;
    border-radius: 100%;
  }
`
!function(){
	var duration

	bindEvents()
	writeCode()

	function writeCode() {
		var codeDiv = document.querySelector('.code-wrapper')
		var codePre = document.querySelector('.code-wrapper pre.code')
		var codeStyle = document.getElementById('code')
		var n = 0
		var id = setTimeout(function run() {
			n += 1
			codePre.innerHTML = code.slice(0, n)
			codeStyle.innerHTML = code.slice(0, n)
			codeDiv.scrollTop = codeDiv.scrollHeight
			if (n < code.length) {
				id = setTimeout(run, duration)
			}
			if (n > code.length) {
				clearInterval(id)
			}
		}, duration)
	}

	function bindEvents() {
		$('div.speedControl').on('click', 'button', (e) => {
			$element = $(e.currentTarget)
			$element.addClass('active')
				.siblings('.active')
				.removeClass('active')
			var speed = $element.attr('data-speed')
			switch (speed) {
				case 'low':
					duration = 100
					break
				case 'normal':
					duration = 50
					break
				case 'high':
					duration = 10
					break
			}
		})
	}
}.call()








