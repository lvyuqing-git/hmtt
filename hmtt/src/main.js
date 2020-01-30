import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import router from '@/router/index'
import { Toast,Icon,Uploader,Dialog,Field,Picker } from 'vant'
Vue.use(Toast)
.use(Icon)
.use(Uploader)
.use(Dialog)
.use(Field)
.use(Picker)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
