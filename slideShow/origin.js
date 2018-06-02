
var spans = document.getElementsByClassName('index')[0].children
var images = document.getElementsByClassName('images')[0]
var index = document.getElementsByClassName('index')[0]
for (let i = 0; i < spans.length; i++) {
	spans[i].onclick = function(x) {
		images.className = 'images'
		images.classList.add('active' + (i+1))
		index.className = 'index'
		index.classList.add('spanActive' + (i+1))
	}
}

var n = 0
var timer = setInterval(()=> {
	n += 1
	spans[n % 3].click()
},1000)

images.onmouseover = ()=> clearInterval(timer)
images.onmouseleave = ()=> {
	timer = setInterval(() => {
		n += 1
		spans[n % 3].click()
	}, 1000)
}
