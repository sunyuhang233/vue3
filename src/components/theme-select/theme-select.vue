<template>
  <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSetTheme">
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <el-icon size="22px"><Setting /></el-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t("msg.theme.themeColorChange") }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 展示弹出层 -->
  <div>
    <select-color v-model="selectColorVisible"></select-color>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SelectColor from "./components/SelectColor.vue";
const selectColorVisible = ref(false);
const handleSetTheme = (command: string) => {
  selectColorVisible.value = true;
};
</script>

<style lang="scss" scoped>
div {
  margin: 0 10px;
}
</style>
