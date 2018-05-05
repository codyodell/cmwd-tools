const getters = {
	is_loading: state => state.is_loading,
	is_sidebar_open: state => state.UI.Sidebar.Open,
	is_sidebar_docked: state => state.UI.Sidebar.Docked,
	is_sidebar_loading: state => state.UI.Sidebar.Loading.Active,
	nav_items_breadcrumb: state => state.UI.Breadcrumb.Nav.Items,
	nav_items_sidebar: state => state.UI.Sidebar.Nav.Items
}

export default getters
