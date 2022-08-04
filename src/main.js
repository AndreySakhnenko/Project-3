import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router/index";

Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
