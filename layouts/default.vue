<template>
  <div 
		:data-slug="slug" 
		:data-layout="layout"
	>
		<div
			class="content"
		>
			<div 
				class="content-left"
			>
				<cmwd-sidebar>
					<cmwd-logo slot="logo" />
				</cmwd-sidebar>
			</div>
		</div>
		<main
			role="main"
			class="content-right"
		>
			<cmwd-header />
			<cmwd-content />
			<cmwd-footer />
		</main>
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
