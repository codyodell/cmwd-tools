<template>
	<layout-default>
		<p>Test.</p>
		<transition>
			<router-view />
		</transition>
	</layout-default>
</template>
<script>
import LayoutDefault from '/layouts/Default'

export default {
	components: {
		LayoutDefault
	}
}
</script>
<style lang="scss">
@import 'muse-ui/dist/muse-ui.css';
@import './assets/CSS/SCSS/CMWD.scss';
</style>
