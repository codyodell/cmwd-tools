import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Overview',
			component: () => import('/pages/Overview.vue')
		},
		{
			path: '/api-tool',
			name: 'API Tool',
			component: () => import('/pages/Api.vue'),
			children: [
				{
					path: '/api/requests',
					name: 'Requests',
					component: () => import('/pages/Api.vue')
				},
				{
					path: '/api/endpoints',
					name: 'Endpoints',
					component: () => import('/pages/Api.vue')
				}
			]
		},
		{
			path: '/wp',
			name: 'Wordpress',
			component: () => import('/pages/Wordpress.vue'),
			children: [
				{
					path: '/wp/posts',
					name: 'Posts',
					component: () => import('/pages/Wordpress.vue')
				}
			]
		},
		{
			path: '/muse-ui',
			name: 'Muse UI',
			component: () => import('/pages/MuseUI.vue')
		},
		{
			path: '/settings',
			name: 'Settings',
			component: () => import('/pages/Settings.vue')
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('/pages/Login.vue')
		},
		{
			path: '/*',
			name: 'Error [404]',
			component: () => import('../pages/Error.vue')
		}
	]
})
