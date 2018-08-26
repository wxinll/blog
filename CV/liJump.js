!function(){
	let view = {
		el: '.topNavBar nav>ul>li .submenu',
		init(){
			this.$el = document.querySelector(this.el) 
		}
	}
	let controller = {
		view: null,
		init(){
			this.view = view
			this.view.init()
			this.bindEvents()
		},
		bindEvents(){
			let lis = this.view.$el.children
			this.view.$el.addEventListener('click',e=> {
				let index
				for(let i=0; i<lis.length; i++){
					if(e.target === lis[i]){
						index = i
					}
				}
				this.toEle(index)
			})
		},
		toEle(index){
			let y,href
			href = this.view.$el.previousElementSibling.getAttribute('href')
			let parentSec = document.querySelector(href)
			let target = document.querySelector(`${href} ul`).children[index]
			y = parentSec.offsetTop + target.offsetTop - 80

			var coords = {
				y: window.scrollY
			}; //滑动起点
			var tween = new TWEEN.Tween(coords)
				.to({
					y: y
				}, 800) //滑动终点设置，耗时
				.easing(TWEEN.Easing.Quadratic.InOut)
				.onUpdate(function() {
					window.scrollTo(0, coords.y)
				})
				.start();
		}
	}
	controller.init()
}.call()