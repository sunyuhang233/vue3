import { login } from "@/api/system";
import { USER_TOKEN } from "@/global/constant";
import { localCache } from "@/utils/cache";
import { defineStore } from "pinia";

const useUserStore = defineStore("useUserStore", {
  state: () => ({}),
  actions: {
    userLogin(data: any) {
      return new Promise((resolve, reject) => {
        login(data)
          .then((res: any) => {
            console.log(res.data);
            localCache.setCache(USER_TOKEN, res.data.token);
            resolve(res.data);
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
