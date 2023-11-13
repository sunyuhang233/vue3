import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from "@/global/constant";
import { localCache } from "./cache";

/**
 * 获取时间戳
 */
export function getTimeStamp() {
  return localCache.getCache(TIME_STAMP);
}
/**
 * 设置时间戳
 */
export function setTimeStamp() {
  localCache.setCache(TIME_STAMP, Date.now());
}
/**
 * 是否超时
 */
export function isCheckTimeout() {
  // 当前时间戳
  const currentTime = Date.now();
  // 缓存时间戳
  const timeStamp = getTimeStamp();
  console.log(currentTime - timeStamp > TOKEN_TIMEOUT_VALUE);

  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE;
}
