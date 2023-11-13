import { DEFAULT_COLOR, LANG, MAIN_COLOR } from "@/global/constant";
import { localCache } from "@/utils/cache";
import { defineStore } from "pinia";

const useAppStore = defineStore("useAppStore", {
  state: () => ({
    sidebarOpened: true,
    language: localCache.getCache(LANG) || "zh",
    mainColor: localCache.getCache(MAIN_COLOR) || DEFAULT_COLOR
  }),
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened;
    },
    setLanguage(language: string) {
      this.language = language;
      localCache.setCache(LANG, language);
    },
    setMainColor(color: string) {
      this.mainColor = color;
      localCache.setCache(MAIN_COLOR, color);
    }
  }
});

export default useAppStore;
