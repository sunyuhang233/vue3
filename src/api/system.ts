import request from "@/utils/request";

/**
 * 登录
 */
export const login = (data: any) => {
  return request({
    url: "/login",
    method: "POST",
    data
  });
};