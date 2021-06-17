import Vue from "vue";
import VueRouter from "vue-router";
// use vue-router
Vue.use(VueRouter);

// constantRoutes
const constantRoutes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index.vue"),
    children: [
      {
        path: "home",
        name: "home",
        meta: {
          title: "首页",
        },
        component: () => import("@/views/home.vue"),
      },
      {
        path: "about",
        name: "about",
        meta: {
          title: "关于",
        },
        component: () => import("@/views/about.vue"),
      },
      // 不在配置中的路由，默认显示
      {
        path: "*",
        component: () => import("@/views/home.vue"),
      },
    ],
  },

  // 404 page must be placed at the end !!!
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  mode: "hash", // hash or history
  // base: '/vue_web_template/', // 路径访问加前缀的时候需要配置，需和vue.config.js中publicPath配置一样
  routes: constantRoutes,
});

// reset router
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
  // 防止退出后再登录，再次加载权限菜单会有重复的路由
  router.options.routes = constantRoutes;
}
export default router;
