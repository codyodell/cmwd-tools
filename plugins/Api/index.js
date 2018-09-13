import Vue from 'vue'
import ApiService from './services/api.js'

const Plugin = {}

Plugin.install = (vue, options) => {
	Vue.prototype.api = new ApiService(options)
}

export default Plugin
