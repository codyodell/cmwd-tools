import Vue from "vue";
import Router from "vue-router";
import Tools from "../components/Tools";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Tools",
      component: Tools
    }
  ]
});
