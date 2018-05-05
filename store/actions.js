import * as types from './types'

export default {
	toggleLoading({ commit }, bool) {
		commit(types.TOGGLE_LOADING, bool)
	},
	toggleSidebar({ commit }, bool) {
		commit(types.TOGGLE_SIDEBAR, bool)
	},
	openSidebar({ commit }) {
		commit(types.OPEN_SIDEBAR, true)
	},
	closeSidebar({ commit }) {
		commit(types.CLOSE_SIDEBAR, false)
	},
	updateBreadcrumb({ commit }, objItems) {
		commit(types.UPDATE_BREADCRUMB, objItems)
	}
}
