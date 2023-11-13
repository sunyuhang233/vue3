import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import useAppStore from "@/stores/app";
import type { App } from "vue";

const appStore = useAppStore();
export default (app: App) => {
  app.use(ElementPlus, {
    locale: appStore.language === "en" ? en : zhCn
  });
};
