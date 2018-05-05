import * as types from './types'

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

export default mutations
