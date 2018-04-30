import Vue from 'vue'
import Api from 'Api'

export default {
	install(Vue, options) {
		Vue.prototype.$api = Api
	}
}
