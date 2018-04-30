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
          :subtitle="url" 
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
			theme: 'dark',
			slug: 'api',
			title: 'API Tool',
			subtitle: 'Tools > Wordpress',
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
                subtitle: this.url,
                icon: 'https',
                data: {
                  url: this.url,
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
              subtitle: this.url,
              icon: 'https',
              data: {
                url: this.url,
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
          .get(this.url, params)
          .then(fnSuccess, fnError)
      },
      toggle_loading (bShow) {
        this.loading = bShow || !this.loading
      },
      add_request (objRequest) {
        this.Requests.push(objRequest)
        let nIndex = this.Requests.length - 1
        return nIndex || false
      },
      add_message (objMessage) {
        this.Messages.push(objMessage)
        let nIndex = this.Messages.length - 1
        return nIndex || false
      }
    }
	},
	mounted() {
    this.send_request()
	}
}
</script>