import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			redirect: '/overview'
		},
		{
			path: '/overview',
			name: 'Overview',
			component: () => import('../pages/Overview.vue')
		},
		{
			path: '/api',
			name: 'API',
			component: () => import('../pages/Api.vue'),
			children: [
				{
					path: '/api/endpoints',
					name: 'Endpoints'
				}
			]
		},
		{
			path: '/muse-ui',
			name: 'Muse UI',
			component: () => import('../pages/MuseUI.vue')
		},
		{
			path: '/*',
			name: 'Error [404]',
			component: () => import('../layouts/error.vue')
		}
	]
})
