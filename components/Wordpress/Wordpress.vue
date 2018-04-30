<template>
  <div>
    <mu-sub-header>{{ subtitle }}</mu-sub-header>
    <mu-content-block>
      <h1>
        <span>{{ title }}</span>
      </h1>
      <mu-card>
        <mu-card-title 
          title="Recent Activity" 
        >
          <mu-avatar slot="avatar">
            <mu-icon value="tune" />
          </mu-avatar>
        </mu-card-title>
      </mu-card>
    </mu-content-block>
  </div>
</template>
<script>
export default {
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
			console.log('Api.vue > Mounted > $nextTick')
		})
	},
	data() {
		return {
			theme: 'lighter',
			slug: 'wordpress',
			title: 'Wordpress',
			subtitle: 'https://www.codyodell.net/',
			url: {
				protocol: 'https',
				base: 'codyodell.net',
				path: 'wp-json',
				endpoints: []
			}
		}
	},
	created() {
		this.request()
		console.log(this.url)
	}
}
</script>
