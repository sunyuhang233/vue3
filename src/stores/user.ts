import { login } from "@/api/system";
import { defineStore } from "pinia";

const useUserStore = defineStore("useUserStore", {
  state: () => ({}),
  actions: {
    userLogin(data: any) {
      return new Promise((resolve, reject) => {
        login(data)
          .then((res: any) => {
            console.log(res.data);
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
