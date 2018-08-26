! function() {
	var view = document.querySelector('.topNavBar nav')

	var controller = {
		view: null,
		aTags: null,
		init: function(){
			this.initAnimation()
			this.bindEvents()
		},
		initAnimation: function() {
			//根据硬件配置设置动画参数
			function animate(time) {
				requestAnimationFrame(animate);
				TWEEN.update(time);
			}
			requestAnimationFrame(animate);
		},
		scrollToEle: function(element) {
			var top = element.offsetTop
			var xCorrect = topNavBarInner.offsetHeight + 10
			var originY = window.scrollY
			var finalY = top - xCorrect

			var coords = {
				y: originY
			};//滑动起点
			var tween = new TWEEN.Tween(coords)
				.to({
					y: finalY
				}, 800)//滑动终点设置，耗时
				.easing(TWEEN.Easing.Quadratic.InOut)
				.onUpdate(function() {
					window.scrollTo(0, coords.y)
				})
				.start();
		},
		bindEvents: function() {
			var aTags = document.querySelectorAll('.topNavBar nav li > a')
			this.aTags = aTags
			for (let i = 0; i < aTags.length; i++) {
				aTags[i].onclick = function(x) {
					x.preventDefault()
					a = x.currentTarget
					var href = a.getAttribute('href')
					var element = document.querySelector(href)
					controller.scrollToEle(element)
				}
			}
		},
	}

	controller.init()

}.call()