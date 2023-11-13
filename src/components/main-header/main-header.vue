<script setup lang="ts">
import headerBreadcrumb from "./c-cpns/header-breadcrumb.vue";
import { ref } from "vue";
const isFold = ref(false);
const emit = defineEmits(["toggleFold"]);
function toggleFold() {
  isFold.value = !isFold.value;
  emit("toggleFold", isFold.value);
}
</script>

<template>
  <div class="main-header">
    <div class="menu-icon">
      <el-icon size="28px" @click="toggleFold">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">
        <header-breadcrumb />
      </div>
      <header-info />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
