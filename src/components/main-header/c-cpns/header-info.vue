<template>
  <div class="header-info">
    <!-- 2.个人信息 -->
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="30" :src="userInfo.avatar" />
          <span class="name">{{ userInfo.userName }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogoutClick">
              <el-icon><CircleClose /></el-icon>
              <span>{{ $t("msg.navBar.logout") }}</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span>{{ $t("msg.navBar.course") }}</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              <span>{{ $t("msg.navBar.home") }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { userInfo } = storeToRefs(userStore);

function handleLogoutClick() {
  userStore.logout();
}
</script>

import type { storeToRefs } from 'pinia';
<style lang="scss" scoped>
.header-info {
  display: flex;
  align-items: center;
}

.operation {
  display: inline-flex;
  margin-right: 20px;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background: #f2f2f2;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}

.info {
  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;

    .name {
      margin-left: 5px;
    }
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
