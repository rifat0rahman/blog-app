import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routs.js'

Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.use(VueResource)

const router = new VueRouter({
	routes:routes,
	mode:'history'
})
//custom directive
Vue.directive('different',{
	bind(el){
		el.style.background = "#" + Math.random().toString().slice(2,8)
		el.style.color = 'white'
	}
})
Vue.directive('theme',{
	bind(el,binding){
		if (binding.value=='wide'){
			el.style.maxWidth = "1024px"
		}
		else if (binding.value == 'narrow'){
			el.style.maxWidth = "500px"
		}
		if(binding.arg=="col"){
			el.style.marginLeft = "200px"
		}
	}
})
//end
//fitering
Vue.filter("to-uppercase",function(value) {
	return value.toUpperCase()
})
Vue.filter("snippet",function(value) {
	return value.slice(0,10)
})

Vue.filter("snippet-content",function(value) {
	return value.slice(0,300)+'......'
})
//end



new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
