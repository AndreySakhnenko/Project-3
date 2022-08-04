import VueRouter from "vue-router";
import NewFilter from "../components/NewFilter";
import NewPages from "../components/NewPages";
import NotFound from "../components/NotFound";
import userFilms from "../components/userFilms";
import createWebHistory from "vue-router";
export default new VueRouter({
  history: createWebHistory("/Project-3/"),
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: NewFilter,
    },
    {
      path: "/film/:id",
      name: "film",
      component: NewPages,
    },
    {
      path: "/search/:id",
      name: "search",
      component: userFilms,
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
    },
  ],
});
