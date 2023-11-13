import { login } from "@/api/system";
import { USER_TOKEN } from "@/global/constant";
import router from "@/router";
import { localCache } from "@/utils/cache";
import { defineStore } from "pinia";

const useUserStore = defineStore("useUserStore", {
  state: () => ({}),
  actions: {
    userLogin(data: any) {
      return new Promise((resolve, reject) => {
        login(data)
          .then((data: any) => {
            console.log(data);
            localCache.setCache(USER_TOKEN, data.token);
            router.push("/");
            resolve(data);
          })
          .catch((err: any) => {
            console.log(err);
            reject(err);
          });
      });
    }
  }
});
export default useUserStore;
