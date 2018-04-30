<template>
  <div 
    :data-slug="slug"
    :data-theme="theme"
    :class="{'loading': loading}"
  >
    <mu-sub-header>{{ subtitle }}</mu-sub-header>
    <mu-content-block>
      <mu-card>
        <mu-card-title 
          :title="title" 
          :subtitle="subtitle" 
        ></mu-card-title>
      </mu-card>
    </mu-content-block>
  </div>
</template>
<script>
export default {
	computed: {
		url() {
			let protocol = this.url.protocol + '://'
			return protocol + this.url.base + '/' + this.url.path
		}
	},
	data() {
		return {
			theme: 'lighter',
			slug: 'api',
			title: 'External Requests',
			subtitle: 'Tools > Wordpress > API Tool',
			url: {
				protocol: 'https',
				base: 'www.codyodell.net',
				path: 'wp-json/wp/v2',
				args: {}
			},
			Endpoints: [],
			Requests: [],
			Messages: [],
			loading: false
		}
	},
	mounted() {
		console.log('URL: ', this.url)
	}
}
</script>
<style lang="scss">

</style>
