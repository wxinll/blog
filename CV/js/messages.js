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

	var view = {
		el: '.messages',
		init(){
			this.$el = document.querySelector('.messages')
		},
		render(data){
			let {name,content} = data
			let li = document.createElement('li')
			let divName = document.createElement('div')
			divName.textContent = `${name}:`
			divName.classList.add("name")
			let divContent = document.createElement('div')
			divContent.textContent = `${content}`
			divContent.classList.add("content")
			li.appendChild(divName)
			li.appendChild(divContent)
			let ol = this.$el.querySelector('.messages ol')
			ol.appendChild(li)
		}
	}

	var controller = {
		model: null,
		view: null,
		init:function(model,view){
			this.view = view
			this.model = model
			this.view.init()
			this.model.init()
			this.loadMessage()
			this.bindEvents()
		},

		loadMessage: function() {
			this.model.fetch().then((objects)=> {
				objects.forEach( (value) =>{
					let data = value.attributes
					this.view.render(data)
				})
			}, function(error) {
				console.log(error)
			})
		},
		saveMessage: function() {
			let name = this.view.querySelector('input[name=name]').value
			let content = this.view.querySelector('input[name=content]').value
			let data = {
				name,
				content
			}
			this.model.save(name, content).then( (objects)=> {
				this.view.render(data)
			})
		},
		clearMessage(){
			this.view.querySelector('input[name=name]').value = ''
			this.view.querySelector('input[name=content]').value = ''
		},
		bindEvents: function() {
			($('.messages form')).on('submit', (e) => {
				e.preventDefault()
				this.saveMessage()
				this.clearMessage()
			})
		}
	}

	controller.init(model,view)

}.call()
