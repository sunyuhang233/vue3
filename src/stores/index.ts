import { createPinia } from "pinia";
import type { App } from "vue";
import useUserStore from "./user";
const pinia = createPinia();
function registerStore(app: App) {
  app.use(pinia);
  const userStore = useUserStore();
  userStore.loadLocalCacheAction();
}
export default registerStore;
