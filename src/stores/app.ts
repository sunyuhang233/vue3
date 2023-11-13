import { LANG } from "@/global/constant";
import { localCache } from "@/utils/cache";
import { defineStore } from "pinia";

const useAppStore = defineStore("useAppStore", {
  state: () => ({
    sidebarOpened: true,
    language: localCache.getCache(LANG) || "zh"
  }),
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened;
    },
    setLanguage(language: string) {
      this.language = language;
      localCache.setCache(LANG, language);
    }
  }
});

export default useAppStore;
