import useUserStore from "@/stores/user";
import axios from "axios";
import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
import { isCheckTimeout } from "./auth";

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在这个位置需要统一去注入 token
    const userStore = useUserStore();
    if (userStore.getToken) {
      if (isCheckTimeout()) {
        console.log("token超时了");

        userStore.logout();
        return Promise.reject(new Error("token超时了"));
      }
      // 如果 token 存在，就注入 token
      config.headers.Authorization = `Bearer ${userStore.getToken}`;
    }
    return config; // 必须返回配置
  },
  error => {
    // 处理 token 超时问题
    if (error.response && error.response.data && error.response.data.code === 401) {
      // token 超时
      const userStore = useUserStore();
      userStore.logout();
    }
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data;
    //   要根据 success 的成功与否决定下面的操作
    if (code === 200) {
      return response.data;
    } else {
      // 业务错误
      ElMessage.error(msg); // 提示错误消息
      return Promise.reject(new Error(msg));
    }
  },
  error => {
    // TODO: 将来处理 token 超时问题
    ElMessage.error(error.message); // 提示错误信息
    return Promise.reject(error);
  }
);

export default service;
