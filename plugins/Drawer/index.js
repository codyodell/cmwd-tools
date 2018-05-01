import Vue from 'vue'
import Drawer from 'Drawer.vue'

export default {
	install(Vue, options) {
		Vue.prototype.$drawer = Drawer
	}
}
