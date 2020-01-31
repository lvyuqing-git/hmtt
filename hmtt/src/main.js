import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import router from '@/router/index'
import { Toast,Icon,Uploader,Dialog,Field,Picker,Tab,Tabs,List } from 'vant'
Vue.use(Toast)
.use(Icon)
.use(Uploader)
.use(Dialog)
.use(Field)
.use(Picker)
.use(Tab)
.use(Tabs)
.use(List)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
