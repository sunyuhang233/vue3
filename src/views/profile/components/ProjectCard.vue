import type { userInfo } from 'os';
<template>
  <div class="">
    <my-avatar :image="userInfo.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
      <div>Hello</div>
      {{ userInfo.userName }}
    </my-avatar>
  </div>
</template>

<script setup lang="ts">
import MyAvatar from "@/components/MyAvatar/index.vue";
import useUserStore from "@/stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { userInfo } = storeToRefs(userStore);
console.log(userInfo);
</script>

<style lang="scss" scoped></style>
