import { getUserInfo, login } from "@/api/system";
import { USER_TOKEN, USER_INFO } from "@/global/constant";
import router from "@/router";
import { setTimeStamp } from "@/utils/auth";
import { localCache } from "@/utils/cache";
import { defineStore } from "pinia";

interface IUserState {
  token: string;
  userInfo: any;
}

const useUserStore = defineStore("useUserStore", {
  state: (): IUserState => ({
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
      this.userInfo = userInfoResult.data;
      localCache.setCache(USER_INFO, userInfoResult.data);
    },
    logout() {
      this.token = "";
      this.userInfo = {};
      localCache.clear();
      router.push("/login");
    },
    loadLocalCacheAction() {
      const token = localCache.getCache(USER_TOKEN);
      const userInfo = localCache.getCache(USER_INFO);
      if (token && userInfo) {
        this.token = token;
        this.userInfo = userInfo;
      }
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
