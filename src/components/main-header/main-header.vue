<script setup lang="ts">
import HeaderInfo from "./c-cpns/header-info.vue";
</script>

<template>
  <div class="main-header">
    <div class="menu-icon"></div>
    <div class="content">
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
</style>
