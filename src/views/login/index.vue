<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Motion from "./utils/motion";
import { useRouter } from "vue-router";
import { message } from "@/utils/message";
import { loginRules } from "./utils/rule";
import TypeIt from "@/components/ReTypeit";
import { debounce } from "@pureadmin/utils";
import { useNav } from "@/layout/hooks/useNav";
import { useEventListener } from "@vueuse/core";
import type { FormInstance } from "element-plus";
import { $t, transformI18n } from "@/plugins/i18n";
import { operates, thirdParty } from "./utils/enums";
import { useLayout } from "@/layout/hooks/useLayout";
import LoginPhone from "./components/LoginPhone.vue";
import LoginRegist from "./components/LoginRegist.vue";
import LoginUpdate from "./components/LoginUpdate.vue";
// import LoginQrCode from "./components/LoginQrCode.vue";
import { useUserStoreHook } from "@/store/modules/user";
import { initRouter, getTopMenu } from "@/router/utils";
import { bg, avatar, illustration } from "./utils/static";
import { ReImageVerify } from "@/components/ReImageVerify";
import { ref, toRaw, reactive, watch, computed } from "vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { useTranslationLang } from "@/layout/hooks/useTranslationLang";
import { useDataThemeChange } from "@/layout/hooks/useDataThemeChange";

import dayIcon from "@/assets/svg/day.svg?component";
import darkIcon from "@/assets/svg/dark.svg?component";
import globalization from "@/assets/svg/globalization.svg?component";
import Lock from "@iconify-icons/ri/lock-fill";
import Check from "@iconify-icons/ep/check";
import User from "@iconify-icons/ri/user-3-fill";
import Info from "@iconify-icons/ri/information-line";

defineOptions({
  name: "Login"
});

const imgCode = ref("");
const loginDay = ref(7);
const router = useRouter();
const loading = ref(false);
const checked = ref(false);
const disabled = ref(false);
const ruleFormRef = ref<FormInstance>();
const currentPage = computed(() => {
  return useUserStoreHook().currentPage;
});

const { t } = useI18n();
const { initStorage } = useLayout();
initStorage();
const { dataTheme, overallStyle, dataThemeChange } = useDataThemeChange();
dataThemeChange(overallStyle.value);
const { title, getDropdownItemStyle, getDropdownItemClass } = useNav();
const { locale, translationCh, translationEn } = useTranslationLang();
import { setToken, removeToken, userKey } from "@/utils/auth";
const ruleForm = reactive({
  username: "sa",
  password: "njyh712",
  verifyCode: ""
});

const onLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(valid => {
    if (valid) {
      loading.value = true;
      setToken({ accessToken: "123" });
      // 获取后端路由
      return initRouter().then(() => {
        disabled.value = true;
        router
          .push(getTopMenu(true).path)
          .then(() => {
            message(t("login.pureLoginSuccess"), { type: "success" });
          })
          .finally(() => (disabled.value = false));
      });
      // useUserStoreHook()
      //   .loginByUsername({
      //     username: ruleForm.username,
      //     password: ruleForm.password,
      //     accountSuitId: "2884558c74e24a3c98e48dcfa6d922c3",
      //     loginType: 1
      //   })
      //   .then(res => {
      //     if (res.data) {
      //  return initRouter().then(() => {
      //         disabled.value = true;
      //         router
      //           .push(getTopMenu(true).path)
      //           .then(() => {
      //             message(t("login.pureLoginSuccess"), { type: "success" });
      //           })
      //           .finally(() => (disabled.value = false));
      //       });
      //     } else {
      //       message(t("login.pureLoginFail"), { type: "error" });
      //     }
      //   })
      //   .finally(() => (loading.value = false));
    }
  });
};

const immediateDebounce: any = debounce(
  formRef => onLogin(formRef),
  1000,
  true
);

useEventListener(document, "keypress", ({ code }) => {
  if (
    ["Enter", "NumpadEnter"].includes(code) &&
    !disabled.value &&
    !loading.value
  )
    immediateDebounce(ruleFormRef.value);
});

watch(imgCode, value => {
  useUserStoreHook().SET_VERIFYCODE(value);
});
watch(checked, bool => {
  useUserStoreHook().SET_ISREMEMBERED(bool);
});
watch(loginDay, value => {
  useUserStoreHook().SET_LOGINDAY(value);
});
</script>

<template>
  <div class="select-none">
    <img :src="bg" class="wave" />
    <div class="flex-c absolute right-5 top-3">
      <!-- 主题 -->
      <!-- <el-switch
        v-model="dataTheme"
        inline-prompt
        :active-icon="dayIcon"
        :inactive-icon="darkIcon"
        @change="dataThemeChange"
      /> -->
    </div>
    <div class="login-container">
      <div class="img">
        <component :is="toRaw(illustration)" />
      </div>
      <div class="login-box">
        <div class="login-form">
          <!-- <avatar class="avatar" /> -->
          <Motion>
            <h2 class="outline-none">
              <TypeIt
                :options="{ strings: [title], cursor: false, speed: 100 }"
              />
            </h2>
          </Motion>

          <el-form
            v-if="currentPage === 0"
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="loginRules"
            size="large"
          >
            <Motion :delay="100">
              <el-form-item
                :rules="[
                  {
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                  }
                ]"
                prop="username"
              >
                <el-input
                  v-model="ruleForm.username"
                  clearable
                  :placeholder="t('login.pureUsername')"
                  :prefix-icon="useRenderIcon(User)"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="150">
              <el-form-item prop="password">
                <el-input
                  v-model="ruleForm.password"
                  clearable
                  show-password
                  :placeholder="t('login.purePassword')"
                  :prefix-icon="useRenderIcon(Lock)"
                />
              </el-form-item>
            </Motion>

            <!-- <Motion :delay="200">
              <el-form-item prop="verifyCode">
                <el-input
                  v-model="ruleForm.verifyCode"
                  clearable
                  :placeholder="t('login.pureVerifyCode')"
                  :prefix-icon="useRenderIcon('ri:shield-keyhole-line')"
                >
                  <template v-slot:append>
                    <ReImageVerify v-model:code="imgCode" />
                  </template>
                </el-input>
              </el-form-item>
            </Motion> -->

            <Motion :delay="250">
              <el-form-item>
                <div class="w-full h-[20px] flex justify-between items-center">
                  <!-- <el-checkbox v-model="checked">
                    <span class="flex">
                      <select
                        v-model="loginDay"
                        :style="{
                          width: loginDay < 10 ? '10px' : '16px',
                          outline: 'none',
                          background: 'none',
                          appearance: 'none'
                        }"
                      >
                        <option value="1">1</option>
                        <option value="7">7</option>
                        <option value="30">30</option>
                      </select>
                      {{ t("login.pureRemember") }}
                      <IconifyIconOffline
                        v-tippy="{
                          content: t('login.pureRememberInfo'),
                          placement: 'top'
                        }"
                        :icon="Info"
                        class="ml-1"
                      />
                    </span>
                  </el-checkbox> -->
                  <el-button
                    link
                    type="primary"
                    @click="useUserStoreHook().SET_CURRENTPAGE(4)"
                  >
                    {{ t("login.pureForget") }}
                  </el-button>
                </div>
                <el-button
                  class="w-full mt-4"
                  size="default"
                  type="primary"
                  :loading="loading"
                  :disabled="disabled"
                  @click="onLogin(ruleFormRef)"
                >
                  {{ t("login.pureLogin") }}
                </el-button>
              </el-form-item>
            </Motion>
          </el-form>

          <!-- 手机号登录 -->
          <LoginPhone v-if="currentPage === 1" />
          <!-- 二维码登录 -->
          <!-- <LoginQrCode v-if="currentPage === 2" /> -->
          <!-- 注册 -->
          <LoginRegist v-if="currentPage === 3" />
          <!-- 忘记密码 -->
          <LoginUpdate v-if="currentPage === 4" />
        </div>
      </div>
    </div>
    <div
      class="w-full flex-c absolute bottom-3 text-sm text-[rgba(0,0,0,0.6)] dark:text-[rgba(220,220,242,0.8)]"
    >
      Copyright © 2020-present
      <a
        class="hover:text-primary"
        href="https://github.com/pure-admin"
        target="_blank"
      >
        &nbsp;{{ title }}
      </a>
    </div>
  </div>
</template>

<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
.login-container {
  // background: url("@/assets/login/background_jsqxj.png") center -120px no-repeat;
  // background-size: cover;
}
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}

.translation {
  ::v-deep(.el-dropdown-menu__item) {
    padding: 5px 40px;
  }

  .check-zh {
    position: absolute;
    left: 20px;
  }

  .check-en {
    position: absolute;
    left: 20px;
  }
}
</style>
