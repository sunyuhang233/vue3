<script setup lang="ts">
import { filterRouters, generateMenus } from "@/utils/route";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { generateTitle } from "@/utils/i18n";
import useAppStore from "@/stores/app";
const appStore = useAppStore();
const props = defineProps({
  isChange: {
    type: Boolean,
    default: false
  }
});
const router = useRouter();
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes());
  return generateMenus(filterRoutes);
});

const activePath = computed(() => {
  return router.currentRoute.value.path;
});
</script>

<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 class="title" v-show="!props.isChange">{{ $t("msg.test") }}</h2>
    </div>
    <div class="menu">
      <el-menu
        :collapse="props.isChange"
        :default-active="activePath"
        class="el-menu-vertical-demo"
        text-color="#b7bdc3"
        active-text-color="#ffd04b"
        :unique-opened="true"
        :background-color="appStore.mainColor"
        router
      >
        <!-- 遍历整个菜单 -->
        <template v-for="item in routes" :key="item.id">
          <!-- 一级菜单 -->
          <el-menu-item v-if="!item.children" :index="item.path">
            <el-icon>
              <component :is="item.icon" />
            </el-icon>
            <span>{{ generateTitle(item.title) }}</span>
          </el-menu-item>
          <!-- 二级菜单 -->
          <el-sub-menu :index="item.path" v-else>
            <template #title>
              <!-- 字符串: el-icon-monitor => 组件 component动态组件 -->
              <el-icon>
                <component :is="item.icon" />
              </el-icon>
              <span>{{ generateTitle(item.title) }}</span>
            </template>

            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.path">
                <span>{{ generateTitle(subitem.title) }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
