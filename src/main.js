import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import router from "./router/index";
import "./assets/styles/header.scss";
import "./assets/styles/new_filter.scss";
import "./assets/styles/new_pages.scss";
import "./assets/styles/user_films.scss";
import "./assets/styles/not_found.scss";
import "./assets/styles/style-pages/auth_modal.scss";
import "./assets/styles/style-pages/pagination.scss";
import "./assets/styles/style-pages/search_films.scss";
Vue.use(VueRouter);
Vue.config.productionTip = false;
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
