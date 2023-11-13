import { DEFAULT_COLOR, LANG, MAIN_COLOR, TAGS_VIEW } from "@/global/constant";
import { localCache } from "@/utils/cache";
import { defineStore } from "pinia";

const useAppStore = defineStore("useAppStore", {
  state: () => ({
    sidebarOpened: true,
    language: localCache.getCache(LANG) || "zh",
    mainColor: localCache.getCache(MAIN_COLOR) || DEFAULT_COLOR,
    tagsViewList: localCache.getCache(TAGS_VIEW) || []
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
    },
    addTagsViewList(tag: any) {
      const isFind = this.tagsViewList.find((item: any) => item.path === tag.path);
      if (!isFind) {
        this.tagsViewList.push(tag);
        localCache.setCache(TAGS_VIEW, this.tagsViewList);
      }
    }
  }
});

export default useAppStore;
