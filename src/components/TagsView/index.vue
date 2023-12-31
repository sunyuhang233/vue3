<template>
  <div class="tags-view-container">
    <el-scrollbar class="tags-view-wrapper">
      <router-link
        class="tags-view-item"
        :class="isActive(tag) ? 'active' : ''"
        v-for="(tag, index) in appStore.tagsViewList"
        :style="{
          backgroundColor: '#555',
          borderColor: '#ccc'
        }"
        :key="tag.fullPath"
        :to="{ path: tag.fullPath }"
        @contextmenu.prevent="openMenu($event, index)"
      >
        {{ tag.title }}
        <i v-show="!isActive(tag)" class="el-icon-close" @click.prevent.stop="onCloseClick(index)">X </i>
      </router-link>
    </el-scrollbar>
    <context-menu v-show="visible" :style="menuStyle" :index="selectIndex"> </context-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, reactive, watch } from "vue";
import useAppStore from "@/stores/app";
const route = useRoute();
const selectIndex = ref(0);
const visible = ref(false);
const menuStyle = reactive({
  left: 0,
  top: 0
});
const appStore = useAppStore();
/**
 * 是否被选中
 */
const isActive = tag => {
  return tag.path === route.path;
};

/**
 * 关闭 tag 的点击事件
 */
const onCloseClick = index => {
  appStore.removeTagsView({
    type: "index",
    index
  });
};
const closeMenu = () => {
  visible.value = false;
};
watch(visible, val => {
  if (val) {
    document.body.addEventListener("click", closeMenu);
  } else {
    document.body.removeEventListener("click", closeMenu);
  }
});
const openMenu = (e, index) => {
  const { x, y } = e;
  menuStyle.left = x + "px";
  menuStyle.top = y + "px";
  selectIndex.value = index;
  visible.value = true;
};
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  color: #fff;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #fff;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      &::before {
        content: "";
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
    // close 按钮
    .el-icon-close {
      position: absolute;
      top: 0;
      right: -4px;
      width: 16px;
      height: 16px;
      line-height: 10px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      color: #e01818;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
