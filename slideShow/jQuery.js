var $spans = $('.index > span')

var $images = $('.images img')

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

var timer = setTimer()

$('.window').on('mouseover', ()=> {
	window.clearInterval(timer)
})

$('.window').on('mouseleave', ()=> {
	timer = setTimer()
})

function setTimer() {
	return setInterval(() => {
		n += 1
		$spans.eq(n % size).trigger('click')
	}, 1000)
}
