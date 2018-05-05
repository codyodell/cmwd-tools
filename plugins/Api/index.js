import Vue from 'vue'
import ApiService from './services/api.js'

const api = {
	install: (Vue, options) => {
		Vue.prototype.$api = new ApiService(options)
		Vue.prototype.$api.log('ApiService:installed', options)
	}
}

export default api
