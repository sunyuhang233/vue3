<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect"> {{ generateTitle(item.meta.title) }}</span>
        <!-- 可点击项 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)"> {{ generateTitle(item.meta.title) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { generateTitle } from "@/utils/i18n";
const route = useRoute();

// 生成数组数据
const breadcrumbData = ref<any[]>([]);
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(item => item.meta && item.meta.title);
  console.log(breadcrumbData.value);
};
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData();
  },
  {
    immediate: true
  }
);
// 处理点击事件
const router = useRouter();
const onLinkClick = (item: any) => {
  console.log(item);
  router.push(item.path);
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
