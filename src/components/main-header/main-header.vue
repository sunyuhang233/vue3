<script setup lang="ts">
import headerBreadcrumb from "./c-cpns/header-breadcrumb.vue";
import langSelect from "@/components/lang-select/lang-select.vue";
import themeSelect from "@/components/theme-select/theme-select.vue";
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
      <div class="breadcrumb">
        <header-breadcrumb />
      </div>
    </div>
    <div class="content">
      <div class="icon">
        <langSelect />
        <themeSelect />
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
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}

.icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 35px;

  &:hover {
    background: #f2f2f2;
  }

  i {
    font-size: 20px;
  }
}
</style>
