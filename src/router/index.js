/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import devs from "../router/devs";
import paths from "../router/path";

function route({ path, view, name, redirect, children }) {
  return {
    name: name || view,
    path,
    component: (resolve) => import(`@/views/${view}.vue`).then(resolve),
    redirect,
    children,
  };
}

const router = createRouter({
  base: "/",
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes: [...paths.map((path) => route(path)), ...devs],
});
// handler logic login but I not using feature login
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   console.log(next());
// });

export default router;
