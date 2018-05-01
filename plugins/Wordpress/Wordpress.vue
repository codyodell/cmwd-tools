<template>
  <div>
    <mu-sub-header>{{ subtitle }}</mu-sub-header>
    <mu-content-block>
      <h1>
        <span>{{ title }}</span>
      </h1>
			<mu-row>
				<mu-col
					width="100"
					tablet="50"
					desktop="50"
				>

				</mu-col>
				<mu-col
					width="100"
					tablet="50"
					desktop="50"
				>
					<mu-card>
						<mu-card-title 
							title="Recent Activity" 
						>
							<mu-avatar slot="avatar">
								<mu-icon value="tune" />
							</mu-avatar>
						</mu-card-title>
					</mu-card>
				</mu-col>
			</mu-row>
    </mu-content-block>
  </div>
</template>
<script>
import Api from '/plugins/Api'

export default {
	components: {
		Api
	},
	computed: {
		url() {
			return this.protocol + '://' + this.url + '/' + this.path
		}
	},
	methods: {
		request() {
			console.log(this.$http)
		}
	},
	mounted() {
		this.$nextTick(function() {
			console.log('Wordpress/Wordpress.vue > Mounted > $nextTick')
		})
	},
	data() {
		return {
			theme: 'primary',
			slug: 'wordpress',
			title: 'Wordpress',
			subtitle: 'https://www.codyodell.net/',
			url: {
				protocol: 'https',
				base: 'codyodell.net',
				path: 'wp-json/v2',
				endpoints: []
			},
			Posts: [],
			Tags: [],
			Categories: [],
			Menus: []
		}
	},
	created() {
		this.request()
		console.log(this.url)
	}
}
</script>
