!function(){
	var model = {
		init: function(){
			var APP_ID = 'nJ7Ea2zgvj46P3EjtjG20OPN-gzGzoHsz'
			var APP_KEY = 'qCXyKxIOHvOypK9SszyQKE9s'
			AV.init({
				appId: APP_ID,
				appKey: APP_KEY
			})
		},
		fetch: function() {
			var query = new AV.Query('messages')
			return query.find()
				.then(function(objects) {
					objects.forEach(function(value) {
						var name = value.attributes.name
						var content = value.attributes.content
					})
				}, function(error) {
					// 异常处理
				}) //Promise
		},
		save: function() {
			var Message = AV.Object.extend('messages');
			var message = new Message();
			return message.save({
				name: name,
				content: content
			})
		},
	}

	var view = ''

	var controller = {
		model: null,
		view: null,
		init:function(model,view){
			this.model = model
			this.model.fetch()
			this.loadMessage()
			this.bindEvents()
		},

		loadMessage: function() {
			let li = document.createElement('li')
			li.textContent = `${name}:${content}`
			let messagesLi = document.querySelector('.messages ol')
			messagesLi.appendChild(li)
		}
		bindEvents: function(){
			($('.messages form')).on('submit', (e) => {
				e.preventDefault()
				let name = $('form input[name=name]')[0].value
				let content = $('form input[name=content]')[0].value
				let li = document.createElement('li')
				li.textContent = `${name}:${content}`
				let messagesLi = document.querySelector('.messages ol')
				messagesLi.appendChild(li)

				this.model.save()

				$('form input[name=name]')[0].value = ''
				$('form input[name=content]')[0].value = ''
			})
		}
	}

	controller.init()

}.call()
