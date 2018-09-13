export default {
	is_loading(state) {
		return state.is_loading
	},
	is_sidebar_open(state) {
		return state.UI.Sidebar.Open
	},
	is_sidebar_docked(state) {
		return state.UI.Sidebar.Docked
	},
	is_sidebar_loading(state) {
		return state.UI.Sidebar.Loading.Active
	},
	nav_items_breadcrumb(state) {
		return state.UI.Breadcrumb.Nav.Items
	},
	nav_items_sidebar(state) {
		return state.UI.Sidebar.Nav.Items
	},
	Posts(state) {
		return state.Posts
	},
	Pages(state) {
		return state.Pages
	}
}
