import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          name: "dashboard",
          path: "",
          component: () =>
            import(/* webpackChunkName: "dashboard" */ "./views/Dashboard")
        },
        {
          name: "exchange",
          path: "exchange",
          component: () =>
            import(/* webpackChunkName: "exchange" */ "./views/Exchange")
        },
        {
          name: "bitcoin-transactions",
          path: "bitcoin-transactions",
          component: () =>
            import(/* webpackChunkName: "bitcoin-tx" */ "./views/BitcoinTx")
        },
        {
          name: "settings",
          path: "settings",
          component: () =>
            import(/* webpackChunkName: "settings" */ "./views/Settings")
        },
        {
          name: "security",
          path: "security",
          component: () =>
            import(/* webpackChunkName: "security" */ "./views/Security")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* webpackChunkName: "login" */ "./views/Login")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import(/* webpackChunkName: "signup" */ "./views/Signup")
    },
    {
      path: "*",
      name: "pageNotFound",
      component: () =>
        import(/* webpackChunkName: "page-not-found" */ "./views/PageNotFound")
    }
  ]
});
