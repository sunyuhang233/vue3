<template>
  <el-timeline>
    <el-timeline-item v-for="item in list" :key="item.id" :timestamp="item.timestamp" placement="top">
      <el-card>
        <h4>{{ item.content }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup lang="ts">
import chapterList from "@/global/chapter.json";
const list = chapterList.list;
console.log(list);
</script>

<style lang="scss" scoped>
.container {
  padding-top: 40px;
}
</style>
