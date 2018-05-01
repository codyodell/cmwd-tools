<template>
	<div id="app">
		<layout-default>
			<router-view />
		</layout-default>
	</div>
</template>
<script>
import LayoutDefault from '/layouts/default'

export default {
	components: {
		LayoutDefault
	}
}
</script>
