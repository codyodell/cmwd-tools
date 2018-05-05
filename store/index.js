import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import actions from './actions'

Vue.use(Vuex)

const state = {
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
								route: { path: '/webdev/tools' },
								name: 'Tools',
								icon: 'filter_list',
								children: [
									{
										route: { path: '/webdev/tools/devices' },
										name: 'Devices',
										icon: 'devices_other',
										switch: true
									},
									{
										route: { path: '/webdev/tools/api' },
										name: 'API',
										icon: 'dns',
										switch: true
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
							}
						]
					},
					{
						route: { path: '/design' },
						name: 'Design',
						icon: 'opacity',
						children: [
							{
								route: { path: '/design/tools' },
								name: 'Tools',
								icon: 'filter_list',
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
								switch: true
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
	}
}

const mutations = {
	[types.UPDATE_BREADCRUMB](state, Items) {
		state.UI.Breadcrumb.Nav = Items
	},
	[types.TOGGLE_SIDEBAR](state) {
		state.is_sidebar_open = !state.is_sidebar_open
	},
	[types.TOGGLE_LOADING](state, bool_or_ui) {
		let is_bool = typeof bool_or_ui === 'boolean'
		let is_ui = bool_or_ui in state.UI
		if (is_bool) {
			state.is_loading = bool_or_ui || !state.is_loading
		} else if (is_ui) {
			let uiItem = state.UI[bool_or_ui]
			uiItem.Loading.Active = !uiItem.Loading.Active
		}
	}
}

const getters = {
	is_loading: state => state.is_loading,
	is_sidebar_open: state => state.UI.Sidebar.Open,
	is_sidebar_docked: state => state.UI.Sidebar.Docked,
	is_sidebar_loading: state => state.UI.Sidebar.Loading.Active,
	nav_items_breadcrumb: state => state.UI.Breadcrumb.Nav.Items,
	nav_items_sidebar: state => state.UI.Sidebar.Nav.Items
}

const store = new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})

export default store
