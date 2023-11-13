<script setup lang="ts">
import { RouterView } from "vue-router";
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
