import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const PageComponents = {
	Overview: () => import('/pages/Overview.vue'),
	Webdev: {
		Tools: {
			Overview: () => import('/pages/WebDevelopment/Tools.vue'),
			Api: () => () => import('/pages/WebDevelopment/Tools/ApiTool.vue'),
			Wordpress: () => import('/pages/WebDevelopment/Tools/WordpressTool.vue')
		}
	},
	Design: {
		Tools: {
			Overview: () => import('/pages/Design/Tools.vue'),
			Color: () => import('/pages/Design/Tools/ColorTool.vue'),
			Icon: () => import('/pages/Design/Tools/IconTool.vue')
		}
	},
	Settings: {
		Overview: () => import('/pages/Settings.vue')
	},
	Login: {
		Overview: () => import('/pages/Login.vue')
	},
	Error: {
		Default: () => import('/pages/Error.vue')
	}
}
const Routes = [
	{
		path: '/',
		name: 'Overview',
		component: PageComponents.Overview
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
				component: PageComponents.Webdev.Tools.Overview,
				children: [
					{
						path: '/webdev/tools/api-tool',
						name: 'API Tool',
						component: PageComponents.Webdev.Tools.Api
					},
					{
						path: '/webdev/tools/wordpress-tool',
						name: 'Wordpress Tool',
						component: PageComponents.Webdev.Tools.Wordpress
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
				component: PageComponents.Design.Tools.Overview,
				children: [
					{
						path: '/design/tools/color-tool',
						name: 'Color Tool',
						component: PageComponents.Design.Tools.Color
					},
					{
						path: '/design/tools/icon-tool',
						name: 'Icon Tool',
						component: PageComponents.Design.Tools.Icon
					}
				]
			}
		]
	},
	{
		path: '/settings',
		name: 'Settings',
		component: PageComponents.Settings.Overview
	},
	{
		path: '/login',
		name: 'Login',
		component: PageComponents.Login
	},
	{
		path: '/*',
		name: 'Error [404]',
		component: PageComponents.Error.default
	}
]
const createRouter = () => {
	return new Router({
		mode: 'history',
		routes: Routes,
		scrollBehavior: () => ({ y: 0 })
	})
}

export default createRouter
