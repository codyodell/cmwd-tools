import store from '../store'
import fetch from '@apicase/adapter-fetch'
import { ApiService, ApiTree } from '@apicase/services'
import { injectService, injectFromTree, commitToStore, dispatchToStore } from "@apicase/vue"

/* --- API Service --- */

//@example $api.wordpress('getPosts').doFetchRequest()
//@example $api.wordpress('getPosts').doFetchRequest({ body })

// Utils

const WithStore = new ApiService({ meta: { store } })
export const Tree = new ApiTree(WithStore, [
	{
		url: 'posts',
		children: [
			{
				name: 'getPosts',
				url: '',
				method: 'GET',
				on: {
					done: commitToStore('posts/setList', ({ result }) => result.body),
					fail: dispatchToStore('alerts/push', ({ result }) => result)
				}
			}, {
				name: 'getPost',
				url: ':id',
				method: 'GET'
			}, {
				name: 'createPost',
				url: '',
				method: 'POST'
			}, {
				name: 'updatePost',
				url: ':id',
				method: 'PUT'
			}, {
				name: 'removePost',
				url: ':id',
				method: 'REMOVE'
			}
		]
	}
])
export const inject = injectFromTree(tree)

export default {
	$api: {
		Wordpress: {
			Url: {
				protocol: 'https',
				url: 'www.codyodell.net',
				path: '/wp-json/v2/wp'
			},
			Endpoints: Tree
		}
	},
	mixins: [injectService(getPosts, {name: 'posts'})],
	computed: {
		url: options => {
			let is_valid = true
			let is_object = typeof options !== 'object'
			let is_empty = !('protocol' in options) || !('url' in options) || !('path' in options
			if (!is_object || is_empty) is_valid = false
			return is_valid ? options.protocol + '://' + options.url + '/' + options.path : is_valid
		}
	},
	async created() {
		await $api.wordpress('getPosts').doFetchRequest()
		console.log(this.posts)
	}
}