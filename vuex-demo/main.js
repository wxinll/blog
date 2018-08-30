const store = new Vuex.Store({
	state: {
		count: 10,
	},
	mutations: {
		addCount(state,n){
			state.count += parseInt(n)
		}
	},
	actions: {
		addAction({commit},data){
			setTimeout(()=> {
				commit('addCount',data)
			},2000)
		}
	}
})

Vue.component('child-one',{
	data(){
		return{
			value: 0,
		}
	},
	computed: {
		count(){
			return this.$store.state.count
		}
	},
	methods: {
		add(){
			this.$store.dispatch('addAction',this.value)
		},
	},
	template: `
	<div id="child-one">
		<header>组件一</header>
		增加共享额度：<input v-model="value">
		<button @click="add()">
			提交
		</button>
	</div>`
})

new Vue({
	el: "#app",
	store,
	data: {
		total: 100
	},
	computed: {
		count(){
			return this.$store.state.count
		}
	}
})