import { createRouter, createWebHistory } from "vue-router";

import SomeWhere from "../views/SomeWhere.vue";
import HomeView from "../views/HomeView";
import AboutPage from "../views/AboutPage";
import MaterialView from "../views/MaterialView";
const routes = [
  {
    path: "/",
    component: HomeView, // Add a component for the root path
    name: "home",
  },
  {
    path: "/somewhere",
    component: SomeWhere,
    name: "SomeWhere",
  },
  {
    path: "/about",
    component: AboutPage,
    name: "About",
  },
  {
    path: "/materijali",
    component: MaterialView,
    name: "Materijali",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
