var p = 0
var $imgs = $('.images>img')
var $image = $('.images')
var size = $imgs.length
var width = $imgs[0].width

$imgs.eq(size-1)
	.clone().addClass('clone')
	.prependTo($image)
$imgs.eq(0)
	.clone().addClass('clone')
	.appendTo($image)

size = $('.images>img').length

var n = 1
toPic(n)

var $span = $('.window .index span')

$('.window .next').on('click',function(){
	n += 1
	toPic(n);
	if ( n === (size-1) ) {
		//最后一张图隐藏切到第2张
		n = 1
		recover()
	}
})

$('.window .pre').on('click',function(){
	n -= 1
	toPic(n)
	if ( n === 0 ) {
		//第1张隐藏切到倒数第2张
		n = size - 2
		recover()
	}
})

for (let i = 0; i < $span.length; i++) {
	$span.eq(i).on('click', function() {
		if (i === 0 && n === size - 2) {
			$('.window .next').trigger('click')
		} else if (i === size - 3 && n === 1) {
			$('.window .pre').trigger('click')
		} else {
			//正常情况
			n = i + 1
			toPic(n)
		}
	})
}

var timer = setTimer()

$('.window').on('mouseover', ()=> {
	window.clearInterval(timer)
})

$('.window').on('mouseleave', ()=> {
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
	return setInterval(() => {
		$('.window .next').trigger('click')
	}, 1500)
}

function recover(){
	$image.one('transitionend', function() {
			let temp = $image.css('transition')
			$image.css({
				transition: 'all 0s',
			})
			toPic(n)
			//触发relayout 重新渲染DOM树，否则css操作会被浏览器优化
			$image.offset()
			$image.css({
				transition: temp
			})
		})
		 // $image.hide().offset()
  //    $image.css({transform:`toPic(n1000px)`}).show()
}

function toPic(n) {
	n = n % size
	p = - n * width
	$image.css({
		transform: 'translate(' + p + 'px)'
	})
}