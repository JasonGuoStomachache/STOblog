import { createRouter, createWebHashHistory } from "vue-router";
import Index from "@/views/index.vue";
import home from "@/views/home.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "home",
        component: home,
      },
    ],
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes,
});

export default router;
