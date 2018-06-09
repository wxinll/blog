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
