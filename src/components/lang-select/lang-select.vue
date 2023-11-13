<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <el-tooltip content="国际化" :effect="effect">
        <el-icon size="20px"><Notebook /></el-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh"> 中文 </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en"> English </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { ElMessage } from "element-plus";
import useAppStore from "@/stores/app";

defineProps({
  effect: {
    type: String,
    default: "dark",
    validator: function (value: any) {
      // 这个值必须匹配下列字符串中的一个
      return ["dark", "light"].indexOf(value) !== -1;
    }
  }
});

const appStore = useAppStore();
const language = computed(() => appStore.language);

// 切换语言的方法
const i18n = useI18n();
const handleSetLanguage = (lang: string) => {
  i18n.locale.value = lang;
  appStore.setLanguage(lang);
  ElMessage.success("更新成功");
};
</script>
