import Vue from 'vue'
import NavigationService from './services/navigation.js'

const Navigation = {
	install: (Vue, options) => {
		Vue.prototype.$navigation = new NavigationService(options)
		Vue.prototype.$navigation.log('NavigationService:installed', options)
	}
}

export default Navigation
