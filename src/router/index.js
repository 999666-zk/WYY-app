import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/layout/home",
  },
  {
    path: "/layout",
    component: () => import("@/views/Layout"),
    children: [
      {
        path: "home",
        meta: {
          title: "Home",
        },
        component: () => import("@/views/Home"),
      },
      {
        path: "search",
        meta: {
          title: "Search",
        },
        component: () => import("@/views/Search"),
      },
      {
        path: "refresh",
        name: "refresh",
        component: () => import("@/views/Refresh/Refresh.vue"),
      },
    ],
  },
  {
    path: "/play",
    component: () => import("@/views/Play"),
  },
  {
    path: "/pinglun",
    component: () => import("@/components/PingLun.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
