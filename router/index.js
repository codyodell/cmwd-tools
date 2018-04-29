import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Tools",
			component: () => import("../pages/Tools.vue")
		},
		{
			path: "/muse-ui",
			name: "Muse UI Kitchen Sink",
			component: () => import("../pages/MuseUI.vue")
		}
	]
})
