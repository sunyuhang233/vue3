import router from "./router";
import { USER_TOKEN } from "@/global/constant";
import { localCache } from "@/utils/cache";
// 白名单
const whiteList = ["/login"];
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  // if (store.state.user.token) {
  // 快捷访问
  if (localCache.getCache(USER_TOKEN)) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next("/login");
    }
  }
});
