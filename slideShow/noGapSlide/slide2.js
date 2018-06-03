//无缝轮播

//core
function setTimer(){
	return setInterval(()=>{
		// head--current--tail
		//1帧的动作
		//视口current向左滑到头部head&end后移动至tail
		
		$images.eq(n % size)
			.removeClass()
			.addClass('head')
			.one('transitionend', (x) => {
				$(x.currentTarget)
					.removeClass()
					.addClass('tail')
			})

		// + 尾部tail滑向current
		$images.eq((n + 1) % size)
			.removeClass()
			.addClass('current')

		//+ 标记spans的状态
		$spans.eq((n + 1) % size)
			.addClass('red')
			.siblings('.red').removeClass('red')

		n += 1

	},1000)
}

var $spans = $('.index > span')

var $image = $('.images')

var $images = $('.images img')

//init
$images.css({
	position: 'absolute'
})
$('.images img').addClass('tail')
$images.eq(0).removeClass().addClass('current')

var n = 0
var size = 3

//start slide & interaction
var timer = setTimer() 

$('.window').on('mouseover', ()=> {
	window.clearInterval(timer)
})

$('.window').on('mouseleave', ()=> {
	timer = setTimer()
})

