import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/:catchAll(.*)",
  //   name: "Notfound",
  //   component: () => import("../views/NotFoundView.vue"),
  // },
  {
    path: "/",
    name: "IndexView",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/auth",
    name: "AuthView",
    component: () => import("../views/AuthView.vue"),
    meta: {
      layout: "auth-layout",
    },
  },
  {
    path: "/user",
    name: "UserProfile",
    component: () => import("../views/UserProfile.vue"),
    meta: {
      layout: "user-profile-layout",
    },
  },
  {
    path: "/user/skills",
    name: "ChartView",
    component: () => import("../views/ChartView.vue"),
    meta: {
      layout: "user-profile-layout",
    },
  },
  {
    path: "/user/projects",
    name: "ProjectsView",
    component: () => import("../views/ProjectsView.vue"),
    meta: {
      layout: "user-profile-layout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
