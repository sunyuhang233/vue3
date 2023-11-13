<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="!isChange ? '210px' : '60px'">
        <MainMenu :is-change="isChange" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <MainHeader @toggleFold="handleFoldClick" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import MainHeader from "@/components/main-header/main-header.vue";
import MainMenu from "@/components/main-menu/main-menu.vue";
import useAppStore from "@/stores/app";
import { generateTitle } from "@/utils/i18n";
import { isTags } from "@/utils/tags";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const isChange = ref(false);
const handleFoldClick = (isFold: boolean) => {
  console.log(isFold);
  isChange.value = isFold;
};

const route = useRoute();
/**
 * 生成 title
 */
const getTitle = route => {
  let title = "";
  if (!route.meta) {
    // 处理无 meta 的路由
    const pathArr = route.path.split("/");
    title = pathArr[pathArr.length - 1];
  } else {
    title = generateTitle(route.meta.title);
  }
  return title;
};

/**
 * 监听路由变化
 */
const appStore = useAppStore();
watch(
  route,
  (to, from) => {
    if (!isTags(to.path)) return;
    const { fullPath, meta, name, params, path, query } = to;
    appStore.addTagsViewList({
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    });
  },
  {
    immediate: true
  }
);
</script>
<style scoped lang="scss">
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
