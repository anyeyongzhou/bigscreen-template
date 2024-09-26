import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: process.env.VUE_APP_BASE_ROUTER_SUF,
    name: "index",
    component: () => import("../views/index.vue"),
  },
];
// 创建路由
const router = createRouter({
  // process是一个进程
  // process.env.BASE_URL是当前环境配置的基础路径
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   // 从当前路由的query对象中获取token值
//   const token = to.query.token

//   if (token) {
//     // 将token保存到cookie，设置过期时间为1天（单位：秒）
//     const expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + 1);
//     document.cookie = `token=${encodeURIComponent(token)}; expires=${expirationDate.toUTCString()}; path=/`;
//   }
//   next()

// })

export default router;
