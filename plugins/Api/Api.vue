<template>
  <div 
    :data-slug="slug"
    :data-theme="theme"
    :class="{'loading': loading}"
  >
    <mu-sub-header>
      <span>{{ subtitle }}</span>
    </mu-sub-header>
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
import api from './services/api'
import store from './services/store'

Vue.use(api, {
   log: true,
   cookie: 'cmwd_tools',
   store: store,
   baseUrl: this.base_url
})

export default {
	computed: {
		base_url() {
			let $url_base__Protocol = this.meta.protocol + '://'
      let $url_base = this.meta.base + '/'
      let $url_base__Path = this.meta.path
			return $url_base__Protocol + $url_base + $url_base__Path
		}
	},
  methods: {
    send_request (options, fnCallbackSuccess, fnCallbackError) {
      options = options || {}
      let params = options.params || {},
          method: options.method || 'GET',
          before: options.before || function() {
            this.toggle_loading(true)
            this.add_request({
              title: 'Wordpress API v2',
              subtitle: this.base_url,
              icon: 'https',
              data: {
                url: this.base_url,
                method: options.method,
                request: options.params,
                response: resp
              }
            })
          }
        }
      },
      fnSuccess = fnCallbackSuccess || (resp) => {
          this.toggle_loading(false)
          this.Requests.push({
            status: 'Pending',
            title: 'Wordpress API v2',
            subtitle: this.base_url,
            icon: 'https',
            data: {
              url: this.base_url,
              method: options.method,
              request: options.params 
            }
          })
        },
        fnError = fnCallbackError || (error) => {
          console.log('Error:', error)
          this.add_message({
            type: 'error',
            message: error
          })
        }
      // Send the Request
      this.$http
        .get(this.base_url, params)
        .then(fnSuccess, fnError)
    },
    toggle_loading (bShow) {
      this.loading = bShow || !this.loading
    },
    add_request (objRequest) {
      console.log('Adding Request..', objRequest)
      this.Requests.push(objRequest)
      let nIndex = this.Requests.length - 1
      return nIndex || false
    },
    add_message (objMessage) {      
      console.log('Adding Message..', objMessage)
      this.Messages.push(objMessage)
      let nIndex = this.Messages.length - 1
      return nIndex || false
    }
  },
	mounted() {
    this.send_request()
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