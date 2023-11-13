<script setup lang="ts">
import { RouterView } from "vue-router";
import useAppStore from "@/stores/app";
import { generateNewStyle, writeNewStyle } from "@/utils/theme";

const appStore = useAppStore();
generateNewStyle(appStore.mainColor).then(newStyleText => {
  writeNewStyle(newStyleText);
});
// 获取.env.development 的 VUE_APP_BASE_API
console.log(import.meta.env.VITE_API_URL);
</script>

<template>
  <div class="page-content">
    <RouterView />
  </div>
</template>

<style scoped>
.page-content {
  height: 100vh;
  width: 100vw;
}
</style>
