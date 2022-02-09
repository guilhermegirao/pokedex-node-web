import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pokemon from "../views/Pokemon.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemons",
    name: "Pokemons",
    component: Home,
  },
  {
    path: "/pokemon/:id",
    name: "Pokemon",
    component: Pokemon,
  },
  {
    path: "/:path(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
