var $lis = $('.menu>ul>li')
var $slides = $(slides)
var width = parseInt($slides.css('width'))

for (let i = 0; i < $lis.length; i++) {
	let p = -i * width
	$lis.eq(i).on('click',()=>{
		$slides.css({
			transform: 'translate('+  p +'px)'
		})
		$lis.removeClass('active')
		$lis.eq(i).addClass('active')
	})
}

var n = 0
size = $lis.length
var timer = setTimer()

$('.wrapper').on('mouseover',()=>{
	clearInterval(timer)
})

$('.wrapper').on('mouseleave',()=>{
	timer = setTimer()
})

document.onvisibilitychange = function(){
	if(document.hidden){
		window.clearInterval(timer)
	}else{
		timer = setTimer()
	}
}

function setTimer() {
	return setInterval(()=>{
		$lis.eq(n % size).trigger('click')
		n += 1
		console.log(n)
	},1000)
}


