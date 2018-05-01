<template>
  <div 
		:data-slug="slug" 
		:data-layout="layout"
		:class="{'sidebar-open': sidebar_open, 'loading': loading}"
	>
		<cmwd-header />
		<cmwd-sidebar />
		<cmwd-content />
		<cmwd-footer />
  </div>  	
</template>
<script>
import CmwdHeader from '/components/Header.vue'
import CmwdSidebar from '/components/Sidebar.vue'
import CmwdContent from '/components/Content.vue'
import CmwdFooter from '/components/Footer.vue'

export default {
	name: 'layout-default',
	components: {
		CmwdHeader,
		CmwdSidebar,
		CmwdContent,
		CmwdFooter
	},
	methods: {
		toggle_sidebar(flag) {
			this.sidebar_open = !this.sidebar_open
			this.sidebar_docked = !flag
		}
	},
	data() {
		return {
			layout: 'default',
			slug: 'overview',
			title: 'eCommerce, Marketing, Web Development and Design Tools',
			subtitle: 'CMWD Tools',
			sidebar_open: true,
			sidebar_docked: true,
			loading: false
		}
	}
}
</script>
