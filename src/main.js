import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { morphDate } from "vue-morphling";

Vue.config.productionTip = false;

Vue.use(morphDate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
