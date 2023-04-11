import { RouterMount, createRouter } from "uni-simple-router";

console.log("ROUTES", ROUTES);
const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...ROUTES],
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  debugger;
  next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
  console.log("跳转结束", from);
});

export { router, RouterMount };
