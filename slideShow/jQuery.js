var $spans = $('.index > span')
var $images = $('.images img')
var $index = $('.index')
for (let i = 0; i < $spans.length; i++) {
	let p = i * -500
	$($spans[i]).on('click', (x) => {
		var index = $(x.currentTarget).index()
		$images.css({
			transform: 'translateX(' + p + 'px)'
		})
		$spans.eq(index)
			.addClass('red')
			.siblings('.red').removeClass('red')
	})
}

var n = 0
var size = $spans.length
var timer = setInterval(()=> {
	n += 1
	$spans.eq(n % 3).trigger('click')
},1000)

$('.images').on('mouseover', ()=> clearInterval(timer))

$('.images').on('mouseleave', ()=> {
	timer = setInterval(()=> {
	n += 1
	$spans.eq(n % 3).trigger('click')
},1000)
})