import { getUserInfo, login } from "@/api/system";
import { USER_TOKEN } from "@/global/constant";
import router from "@/router";
import { setTimeStamp } from "@/utils/auth";
import { localCache } from "@/utils/cache";
import { defineStore } from "pinia";

const useUserStore = defineStore("useUserStore", {
  state: () => ({
    token: "",
    userInfo: {}
  }),
  actions: {
    async userLogin(data: any) {
      const loginResult: any = await login(data);
      setTimeStamp();
      this.token = loginResult.token;
      localCache.setCache(USER_TOKEN, loginResult.token);

      // 跳转到首页
      router.push("/");

      // 获取用户信息
      const userInfoResult = await getUserInfo();
      console.log(userInfoResult);
      this.userInfo = userInfoResult.data;
    },
    logout() {
      this.token = "";
      this.userInfo = {};
      localCache.clear();
      router.push("/login");
    }
  },
  getters: {
    // 获取用户token
    getToken(): string {
      console.log(this.token);

      return this.token || localCache.getCache(USER_TOKEN);
    }
  }
});
export default useUserStore;
