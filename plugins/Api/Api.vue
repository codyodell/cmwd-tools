<template>
  <div 
    :data-slug="slug"
    :data-theme="theme"
    :class="{'loading': loading}"
  >
		<page-header
			:title="title"
			:subtitle="subtitle"
		></page-header>
    <mu-content-block>
      <mu-card>
        <mu-card-title 
          title="Card Title" 
          subtitle="Card Subtitle" 
        ></mu-card-title>
      </mu-card>
    </mu-content-block>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { ApiService } from '@apicase/core'
import fetch from '@apicase/adapter-fetch'
import { ApiTree } from '@apicase/services'
import PageHeader from '/components/PageHeader'

const $api = {}

const apiWordpressRoot = new ApiService({
	adapter: fetch,
	url: 'https://www.codyodell.net/wp-json/v2/'
})
	.on('start', state => {
		this.$store.commit('TOGGLE_LOADING', true)
	})
	.on('finish', state => {
		this.$store.commit('TOGGLE_LOADING', false)
	})
	.on('error', error => {
		console.log(error)
	})
	.on('done', (result, state) => {
		console.log(result)
	})

$api.Wordpress = new ApiTree(apiWordpressRoot, [
	{
		name: 'Wordpress',
		url: 'wp-json/v2',
		children: [
			{
				name: 'Base',
				url: '',
				method: 'GET'
			},
			{
				name: 'Settings',
				url: 'settings',
				method: 'GET'
			},
			{
				name: 'Menus',
				url: 'menus',
				method: 'GET'
			},
			{
				name: 'Media',
				url: 'media',
				method: 'GET'
			},
			{
				name: 'Categories',
				url: 'categories',
				method: 'GET'
			},
			{
				name: 'Tags',
				url: 'tags',
				method: 'GET'
			},
			{
				name: 'Posts',
				url: 'posts',
				method: 'GET'
			},
			{
				name: 'Pages',
				url: 'pages',
				method: 'GET'
			},
			{
				name: 'Users',
				url: 'users',
				method: 'GET'
			}
		]
	}
])

export default {
	computed: {
		base_url() {
			let $url_base__Protocol = this.meta.protocol + '://'
			let $url_base = this.meta.base + '/'
			let $url_base__Path = this.meta.path
			return $url_base__Protocol + $url_base + $url_base__Path
		},
		...mapState({
			is_loading: 'is_loading'
		})
	},
	methods: {
		...mapState({
			toggleLoading: 'toggleLoading'
		})
	},
	mounted() {
		$api
			.Wordpress('Base')
			.doRequest()
			.then(result => {
				console.log(result)
			})
	},
	data() {
		return {
			theme: 'dark',
			slug: 'api-tool',
			title: 'API Tool',
			subtitle: 'Web Development > Tools',
			meta: {
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
	}
}
</script>
