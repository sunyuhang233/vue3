<template>
  <div class="author-container">
    <div class="header">
      <my-avatar image="https://tupian.qqw21.com/article/UploadPic/2021-4/20214720294413745.jpg" height="60px" width="60px">
      </my-avatar>
      <div class="header-desc">
        <h3>孙宇航</h3>
        <span>软件2242</span>
      </div>
    </div>
    <div class="info">Web 全栈开发工程师</div>
  </div>
</template>

<script setup lang="ts">
import MyAvatar from "@/components/MyAvatar/index.vue";
</script>

<style lang="scss" scoped>
.author-container {
  .header {
    display: flex;
    .header-desc {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        font-size: 14px;
      }
    }
  }
  .info {
    margin-top: 16px;
    line-height: 22px;
    font-size: 14px;
    text-indent: 26px;
  }
}
</style>
