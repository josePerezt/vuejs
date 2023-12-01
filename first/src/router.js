import { createRouter, createWebHashHistory } from "vue-router";
import Counter from "./views/Counter.vue";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Fotos from "./views/Fotos.vue";
import Photo from "./components/Photo.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },

  {
    path: "/counter",
    name: "counter",
    component: Counter,
  },
  {
    path: "/fotos",
    name: "fotos",
    component: Fotos,
  },
  {
    path: "/fotos/:id",
    name: "foto",
    component: Photo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
