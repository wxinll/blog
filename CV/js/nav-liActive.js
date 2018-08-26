	/*iTags add active*/
	window.addEventListener('scroll', () => {
		topNavActive()
	})
	liActive()
	function liActive() {
		var liTags = document.querySelectorAll('.topNavBar nav>ul>li')
		for (var i = 0; i < liTags.length; i++) {
			liTags[i].onmouseenter = function(x) {
				x.currentTarget.classList.add('active')
			}
		}
		for (var i = 0; i < liTags.length; i++) {
			liTags[i].onmouseleave = function(x) {
				x.currentTarget.classList.remove('active')
			}
		}
	}

	function topNavActive() {
		if (window.scrollY > 0) {
			topNavBarInner.classList.add('active')
		} else {
			topNavBarInner.classList.remove('active')
		}
	}