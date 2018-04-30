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
            <mu-icon value="https" />
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
			title: 'Wordpress',
			subtitle: 'https://www.codyodell.net/',
			protocol: 'https',
			url: 'codyodell.net',
			path: 'wp-json'
		}
	},
	created() {
		this.request()
		console.log(this.url)
	}
}
</script>
