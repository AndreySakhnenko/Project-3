import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router/index";
import "./style/auth_modal.css";
import "./style/header.css";
import "./style/new_pages.css";
import "./style/pagination.css";
import "./style/search_films.css";
import "./style/user_films.css";
Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
