<template>
  <div 
		:data-slug="slug" 
		:data-layout="layout"
	>
		<cmwd-header />
		<cmwd-sidebar>
			<cmwd-logo slot="logo" />
		</cmwd-sidebar>
		<cmwd-content />
		<cmwd-footer />
  </div>  	
</template>
<script>
import CmwdLogo from '/components/Logo.vue'
import CmwdHeader from '/components/Header.vue'
import CmwdSidebar from '/components/SidebarNew.vue'
import CmwdContent from '/components/Content.vue'
import CmwdFooter from '/components/Footer.vue'

export default {
	name: 'layout-default',
	components: {
		CmwdLogo,
		CmwdHeader,
		CmwdSidebar,
		CmwdContent,
		CmwdFooter
	},
	watch: {
		path: () => {
			console.log('Layouts > Default > Watch > Path')
		}
	},
	data() {
		return {
			layout: 'default',
			theme: 'default',
			slug: 'cmwd-tools',
			title: 'CMWD Tools',
			subtitle: 'eCommerce, Marketing, Web Development and Design Tools',
			path: [
				{
					route: { path: '/' },
					name: 'CMWD Tools'
				},
				{
					route: { path: '/overview' },
					name: 'Overview'
				}
			]
		}
	}
}
</script>
