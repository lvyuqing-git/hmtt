import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import router from '@/router/index'
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
