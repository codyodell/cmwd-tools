'use strict'
// CMWD
import 'es6-promise/auto'
import Vue from 'vue'
// App
import createApp from './index.app.js'
// Styles
import './assets/CSS/SCSS/CMWD.scss'
// Mixins
Vue.mixin({
	// Global Mixin: `beforeRouteUpdate`
	// @desc Calls `asyncData` when a route component's
	// params change
	beforeRouteUpdate(to, from, next) {
		const { asyncData } = this.$options
		if (asyncData) {
			asyncData({
				store: this.$store,
				route: to
			})
				.then(next)
				.catch(next)
		} else {
			next()
		}
	}
})
//console.log(createApp)
const { app, router, store } = createApp()
// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
	// Add router hook for handling asyncData.
	// Doing it after initial route is resolved so that we don't double-fetch
	// the data that we already have. Using router.beforeResolve() so that all
	// async components are resolved.
	router.beforeResolve((to, from, next) => {
		let diffed = false
		const matched = router.getMatchedComponents(to)
		const prevMatched = router.getMatchedComponents(from)
		const activated = matched.filter((c, i) => {
			return diffed || (diffed = prevMatched[i] !== c)
		})
		const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
		if (!asyncDataHooks.length) return next()
		//bar.start()
		Promise.all(
			asyncDataHooks.map(hook =>
				hook({
					store,
					route: to
				})
			)
		).then(() => next())
	})
	// actually mount to DOM
	app.$mount('#app')
})
const is_https = 'https:' === document.location.protocol
// service worker
if (is_https && navigator.serviceWorker) {
	navigator.serviceWorker.register('/service-worker.js')
}
