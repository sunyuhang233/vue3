<template>
  <div class="pane-account">
    <el-form :model="account" :rules="accountRules" label-width="60px" size="large" status-icon ref="formRef">
      <el-form-item label="帐号" prop="username">
        <el-input v-model="account.username" :prefix-icon="User" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password :prefix-icon="Lock" placeholder="请输入密码" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref, computed } from "vue";
import { ElMessage } from "element-plus";
import type { FormRules, ElForm } from "element-plus";
import useUserStore from "@/stores/user";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

// 1.定义account数据
const account = reactive({
  username: "",
  password: ""
});

// 2.定义校验规则
const accountRules: FormRules = {
  username: [
    {
      required: true,
      message: computed(() => {
        return i18n.t("msg.login.usernameRule") as string;
      }),
      trigger: "blur"
    }
    // {
    //   pattern: /^[a-z0-9]{6,20}$/,
    //   message: "必须是6~20数字或字母组成~",
    //   trigger: "blur"
    // }
  ],
  password: [
    {
      required: true,
      message: computed(() => {
        return i18n.t("msg.login.passwordRule");
      }),
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "必须是3位以上数字或字母组成",
      trigger: "blur"
    }
  ]
};

// 3.执行帐号的登录逻辑
const userStore = useUserStore();
const formRef = ref<InstanceType<typeof ElForm>>();
function loginAction(isRemPwd: boolean, isLoading: boolean) {
  isLoading = true;
  formRef.value?.validate(valid => {
    if (valid) {
      // 1.获取用户输入的帐号和密码
      console.log(isRemPwd);
      userStore.userLogin(account);
      ElMessage.success("恭喜您, 登录成功~~");
    } else {
      ElMessage.error("Oops, 请您输入正确的格式后再操作~~.");
    }
    isLoading = false;
  });
}

defineExpose({
  loginAction
});
</script>

<style lang="scss" scoped>
.pane-account {
  color: red;
}
</style>
