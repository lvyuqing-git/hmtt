import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Personal from '../views/Personal.vue'
import Edit_profile from '../views/Edit_profile'
import Index from '../views/Index'
import NewsDetails from '../views/NewsDetails'
Vue.use(VueRouter)

let router = new VueRouter({
	routes: [
		{
			name: 'default',
			path: '/',
			component: Index
		},
		{
			name: 'Index',
			path: '/index',
			component: Index
		},
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
			name: 'Edit_profile',
			path: '/edit_profile/:id',
			component: Edit_profile
        },
        {
            name : 'NewsDetails',
            path : '/newsDetails/:id',
            component : NewsDetails
        }
	]
})
router.beforeEach((to, from, next) => {
	
	if (to.path == '/personal') {
		if (localStorage.getItem('token')) {
			next()
		}else{
            next('/login')
        }
	}else{
        next()
    }
})
export default router
