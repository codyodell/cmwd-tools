<template>
  <header
		id="header"
	>
  	<mu-appbar fullWidth>
			<mu-icon-button 
				slot="left"
				icon="menu" 
				@click="toggleSidebar()"
			/>
      <loading
				v-show="!is_loading"
				:active.sync="is_loading"
			/>
			<mu-circular-progress
				v-show="is_loading"
				slot="left"
			/>
			<mu-list-item
				slot="right"
			>
				<mu-raised-button 
					label="Login"
					icon="account_circle"
					to="/login" 
					primary
				/>
			</mu-list-item>
		</mu-appbar>
  </header>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'

export default {
	name: 'cmwd-header',
	components: {
		Loading
	},
	props: {
		logo: {
			type: String,
			default() {
				return ''
			}
		}
	},
	computed: {
		...mapGetters({
			is_loading: 'is_loading'
		})
	},
	methods: {
		toggle() {
			this.toggleSidebar()
		},
		...mapActions({
			toggleSidebar: 'toggleSidebar'
		})
	}
}
</script>
