export default {
	User: {},
	is_loading: false,
	UI: {
		Default: {
			Loading: {
				Type: 'overlay',
				Active: false,
				Message: 'Loading..'
			},
			Nav: {
				Items: [
					{
						route: { path: '/' },
						name: 'CMWD',
						icon: 'home',
						children: [
							{
								route: { path: '/overview' },
								name: 'Overview',
								icon: 'filter_list'
							}
						]
					}
				]
			}
		},
		Header: {
			Loading: {
				Active: false
			},
			Nav: {
				Items: [
					{
						route: { path: '/login' },
						name: 'Login',
						icon: 'lock_outline'
					}
				]
			}
		},
		Sidebar: {
			Open: true,
			Docked: true,
			Loading: {
				Active: false
			},
			Nav: {
				Items: [
					{
						route: { path: '/ecommerce' },
						name: 'eCommerce',
						icon: 'store',
						tooltip: 'Coming Soon.',
						disabled: true
					},
					{
						route: { path: '/marketing' },
						name: 'Marketing',
						icon: 'show_chart',
						tooltip: 'Coming Soon.',
						disabled: true
					},
					{
						route: { path: '/webdev' },
						name: 'Web Development',
						icon: 'mouse',
						children: [
							{
								route: { path: '/webdev/tools/devices' },
								name: 'Devices',
								icon: 'devices_other',
								show_switch: true
							},
							{
								route: { path: '/webdev/tools/api' },
								name: 'API',
								icon: 'dns',
								show_switch: true
							},
							{
								route: { path: '/webdev/tools/code-snippets' },
								name: 'Code Snippets',
								icon: 'code'
							},
							{
								route: { path: '/webdev/tools/cms' },
								name: 'CMS',
								icon: 'view_compact',
								children: [
									{
										route: { path: '/webdev/tools/cms/wordpress' },
										name: 'Wordpress',
										icon: 'view_compact'
									}
								]
							}
						]
					},
					{
						route: { path: '/design' },
						name: 'Design',
						icon: 'opacity',
						children: [
							{
								route: { path: '/design/tools/icons' },
								name: 'Icons',
								icon: 'ac_unit'
							},
							{
								route: { path: '/design/tools/colors' },
								name: 'Colors',
								icon: 'palette'
							}
						]
					},
					{
						route: { path: '/settings' },
						name: 'Settings',
						icon: 'tune',
						children: [
							{
								route: { path: '/settings/account' },
								name: 'Account',
								icon: 'account_circle'
							},
							{
								route: { path: '/settings/activity' },
								name: 'Show Activity Monitor',
								icon: 'track_changes',
								show_switch: true
							}
						]
					}
				]
			}
		},
		Breadcrumb: {
			Loading: {
				Active: false
			},
			Nav: {
				Items: [
					{
						route: { path: '/' },
						name: 'Overview',
						icon: 'home'
					}
				]
			}
		},
		Footer: {
			Nav: {
				Items: [
					{
						route: { path: '/ecommerce' },
						name: 'eCommerce',
						icon: 'store',
						tooltip: 'Coming Soon.',
						disabled: true
					},
					{
						route: { path: '/marketing' },
						name: 'Marketing',
						icon: 'show_chart',
						tooltip: 'Coming Soon.',
						disabled: true
					},
					{
						route: { path: '/webdev' },
						name: 'Web Development',
						icon: 'mouse'
					},
					{
						route: { path: '/design' },
						name: 'Design',
						icon: 'opacity'
					}
				]
			}
		}
	},
	Posts: [],
	Pages: [],
	Tags: [],
	Categories: [],
	Users: [],
	CurrentUser: {
		id: 0,
		token: null
	}
}
