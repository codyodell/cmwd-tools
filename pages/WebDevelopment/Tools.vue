<template>
	<div
		:data-slug="slug"
	>
		<page-header
			:title="title"
			:subtitle="subtitle"
		></page-header>
		<mu-content-block>
      <p>Web development tools content.</p>
    </mu-content-block>
	</div>
</template>
<script>
import PageHeader from '/components/PageHeader'

export default {
	components: {
		PageHeader
	},
	data() {
		return {
			slug: 'cmwd-webdev-tools',
			title: 'Tools',
			subtitle: 'CMWD > Webdev'
		}
	}
}
</script>
