import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Personal from '../views/Personal.vue'
import Edit_profile from '../views/Edit_profile'
Vue.use(VueRouter)

let router = new VueRouter({
	routes: [
		{
			name: 'Login',
			path: '/login',
			component: Login
		},
		{
			name: 'Personal',
			path: '/personal',
			component: Personal
        },
        {
            name : 'Edit_profile',
            path : '/edit_profile',
            component : Edit_profile
        }
        
	]
})
router.beforeEach((to, from, next) => {
	if (to.path == '/login') {
		next()
	} else {
		let token = localStorage.getItem('token')
		if (token) {
			next()
		} else {
			next('/login')
		}
	}
})
export default router
