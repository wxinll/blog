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
		},
		save: function(name,content) {
			var Message = AV.Object.extend('messages');
			var message = new Message();
			return message.save({
				'name': name,
				'content': content
			})
		},
	}

	var view = document.querySelector('.messages')

	var controller = {
		model: null,
		view: null,
		init:function(model,view){
			this.view = view
			this.model = model
			this.model.init()
			this.loadMessage()
			this.bindEvents()
		},

		loadMessage: function() {
			this.model.fetch().then(function(objects) {
				objects.forEach(function(value) {
					let name = value.attributes.name
					let content = value.attributes.content
					let li = document.createElement('li')
					li.textContent = `${name}:${content}`
					let messagesLi = document.querySelector('.messages ol')
					messagesLi.appendChild(li)
				})
			}, function(error) {
				// 异常处理
			}) 
		},
		saveMessage: function() {
			let name = this.view.querySelector('input[name=name]').value
			let content = this.view.querySelector('input[name=content]').value
			this.model.save(name, content).then( (objects)=> {
				let li = document.createElement('li')
				li.textContent = `${name}:${content}`
				let messagesLi = this.view.querySelector('ol')
				messagesLi.appendChild(li)
			})
		},
		bindEvents: function() {
			($('.messages form')).on('submit', (e) => {
				e.preventDefault()
				this.saveMessage()
				this.view.querySelector('input[name=name]').value = ''
				this.view.querySelector('input[name=content]').value = ''
			})
		}
	}

	controller.init(model,view)

}.call()
