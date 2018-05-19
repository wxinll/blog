var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight


var toolIcon = document.getElementsByClassName('tool')[0].getElementsByTagName('svg')
var pen = toolIcon[0]
var erase = toolIcon[1]
var del = toolIcon[2]
var download = toolIcon[3]

// init
var eraseEnabled = false
context.lineWidth = 5
var penSize = context.lineWidth

// tool choose
pen.onclick = function(){
	eraseEnabled = false
	pen.classList.add('active')
	erase.classList.remove('active')
}
erase.onclick = function() {
	eraseEnabled = true
	erase.classList.add('active')
	pen.classList.remove('active')
}
del.onclick = function() {
	context.clearRect(0, 0, canvas.width, canvas.height)
	eraseEnabled = false
}
download.onclick = function(){
  var url = canvas.toDataURL("image/png")
  var a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = '画画了'
  a.target = '_blank'
  a.click()
}

// color choose
red.onclick = function() {
	context.strokeStyle = 'red'
	red.classList.add('active')
	green.classList.remove('active')
	blue.classList.remove('active')
}
green.onclick = function() {
	context.strokeStyle = 'green'
	green.classList.add('active')
	red.classList.remove('active')
	blue.classList.remove('active')
}
blue.onclick = function() {
	context.strokeStyle = 'blue'
	blue.classList.add('active')
	green.classList.remove('active')
	red.classList.remove('active')
}

// lineWidth choose
size1.onclick = function(){
	context.lineWidth = 5
}
size2.onclick = function(){
	context.lineWidth = 10
}
size3.onclick = function(){
	context.lineWidth = 15
}

sizeBar.onclick = function(){
	penSize = context.lineWidth
}


function handStart(x,y){
	if (eraseEnabled) {
		eraseMove()
	} else {
		context.beginPath()
		context.moveTo(x, y)
	}
}

function handMove(x, y) {
	if (eraseEnabled) {
		eraseMove()
	} else {
		context.lineTo(x, y)
		context.stroke()
	}
}

function eraseMove(){
	var eraseSize = penSize * 3
	var dx = eraseSize / 2
	var dy = eraseSize / 2
	context.clearRect(x - dx, y - dy, eraseSize, eraseSize)
}

var touch = document.ontouchstart
var using

// 判断触屏设备or鼠标设备
if (touch !== undefined) {
	// 触屏设备
	canvas.ontouchstart = function(xx) {
		using = true
		x = xx.touches[0].clientX
		y = xx.touches[0].clientY
		handStart(x,y)
	}

	canvas.ontouchmove = function(xx) {
		if (using) {
			x = xx.touches[0].clientX
			y = xx.touches[0].clientY
			handMove(x, y)
		}
	}

	canvas.ontouchend = function(xx) {
		using = false
	}
}
// 非触屏设备
else {
	canvas.onmousedown = function(xx) {
		using = true
		x = xx.clientX
		y = xx.clientY
		handStart(x, y)
	}
	canvas.onmousemove = function(xx) {
		if (using) {
			x = xx.clientX
			y = xx.clientY
			handMove(x, y)
		}
	}
	canvas.onmouseup = function(xx) {
		using = false
	}
}