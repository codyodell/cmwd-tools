import Vue from 'vue'

export default {
	UPDATE_BREADCRUMB: (state, { Items }) => {
		Vue.set(state.UI, 'Breadcrumb', Items)
	},
	TOGGLE_SIDEBAR: (state, { bool }) => {
		state.is_sidebar_open = !state.is_sidebar_open
	},
	TOGGLE_LOADING: (state, { bool_or_ui }) => {
		let is_bool = typeof bool_or_ui === 'boolean'
		let is_ui = bool_or_ui in state.UI
		state.is_loading = is_bool ? bool_or_ui : !state.is_loading
		if (is_ui) {
			let keyUI = bool_or_ui
			let objLoading = { Active: !state.UI[keyUI].Loading.Active }
			Vue.set(state.UI, keyUI, objLoading)
		}
	},
	STORE_POSTS: (state, { response }) => {
		state.Posts = response
	},
	LOGIN: (state, { data }) => {
		localStorage.setItem('token', data)
		state.token = data
	},
	LOGOUT: state => {
		localStorage.removeItem('token')
		state.token = null
	}
}
