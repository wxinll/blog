! function() {
	var view = document.querySelectorAll('[sec-tag]')

	var controller = {
		minIndex: null,
		secTags: null,		
		init: function(view){
			this.secTags = view
			this.addOffSet()
			this.bindEvents()
		},
		addOffSet: function() {
			secTags = this.secTags
			for (var i = 0; i < secTags.length; i++) {
				secTags[i].classList.add('offSet')
			}
		},
		findClose: function(){
			secTags = this.secTags
			var minIndex = 0
			var dx = []
			for (var i = 0; i < secTags.length; i++) {
				dx[i] = Math.abs(secTags[i].offsetTop - window.scrollY)
				if (dx[i] < dx[minIndex]) {
					minIndex = i
				}
			}
			this.minIndex = minIndex
		},	
		bindEvents: function() {
			window.addEventListener('scroll', () => {
				this.findClose()
				var section = this.secTags[this.minIndex]
				section.classList.remove('offSet') //remove offSet
				var id = section.id
				var mark = 'a[href="#' + id + '"]'
				var aTag = document.querySelector(mark)
				var liTags = document.querySelectorAll('.topNavBar nav>ul>li')
				for (var i = 0; i < liTags.length; i++) {
					liTags[i].classList.remove('highLight')
				}
				aTag.parentNode.classList.add('highLight')
			})
		},
	}

	controller.init(view)
	
}.call()