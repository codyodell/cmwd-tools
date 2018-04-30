import Vue from 'vue'
import Wordpress from 'Wordpress'

Wordpress.install = function(Vue) {
	Vue.component(Wordpress.name, Wordpress)
}

export default Wordpress
