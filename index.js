// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/CSS/SCSS/CMWD.scss'
Vue.use(MuseUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	store,
	el: '#app',
	router,
	template: '<App/>',
	...App
})
