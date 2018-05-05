import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	//mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Overview',
			component: () => import('/pages/Overview.vue')
		},
		{
			path: '/ecommerce',
			name: 'eCommerce'
		},
		{
			path: '/marketing',
			name: 'Marketing'
		},
		{
			path: '/webdev',
			name: 'Web Development',
			redirect: '/webdev/tools',
			children: [
				{
					path: '/webdev/tools',
					name: 'Webdev Tools',
					component: () => import('/pages/WebDevelopment/Tools.vue'),
					children: [
						{
							path: '/webdev/tools/api-tool',
							name: 'API Tool',
							component: () => import('/pages/WebDevelopment/Tools/ApiTool.vue')
						},
						{
							path: '/webdev/tools/wordpress-tool',
							name: 'Wordpress Tool',
							component: () =>
								import('/pages/WebDevelopment/Tools/WordpressTool.vue')
						}
					]
				}
			]
		},
		{
			path: '/design',
			name: 'Design',
			redirect: '/design/tools',
			children: [
				{
					path: '/design/tools',
					name: 'Design Tools',
					component: () => import('/pages/Design/Tools.vue'),
					children: [
						{
							path: '/design/tools/color-tool',
							name: 'Color Tool',
							component: () => import('/pages/Design/Tools/ColorTool.vue')
						},
						{
							path: '/design/tools/icon-tool',
							name: 'Icon Tool',
							component: () => import('/pages/Design/Tools/IconTool.vue')
						}
					]
				}
			]
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
