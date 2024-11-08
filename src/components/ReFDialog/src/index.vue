<script setup>
import { computed } from "vue";
import { useGlobal } from "@pureadmin/utils";
const { $storage } = useGlobal();
defineOptions({
  name: "ReFdialog"
});

const props = defineProps({
  //控制 dialog 显示
  isShow: {
    type: Boolean,
    default: false
  },
  //标题颜色
  titleColor: {
    type: String,
    default: "#3480FB"
  },
  //标题内容
  title: {
    type: String,
    default: "弹出框标题"
  },
  //提示栏字体颜色
  tipColor: {
    type: String,
    default: "#3480FB"
  },
  //提示栏内容
  tipContent: {
    type: String,
    default: "温馨提示"
  },
  //底部按钮对齐方式
  footerAlign: {
    type: String,
    default: "center"
  },
  //是否显示提醒行
  tip: Boolean
});

const emits = defineEmits(["update:isShow"]);

const is_Show = computed({
  get: () => props.isShow,
  set: val => {
    emits("update:isShow", val);
  }
});
const sidebarStatus = computed(() => {
  return $storage.layout.sidebarStatus || true;
});
</script>

<template>
  <el-dialog
    v-model="is_Show"
    :title="title"
    :class="sidebarStatus ? 'fullscreen-dialog' : 'fullscreen-dialog1'"
    fullscreen
  >
    <slot name="body"></slot>
    <template #footer>
      <div class="dialog-footer">
        <span>
          <slot name="button"></slot>
        </span>
      </div>
    </template>
  </el-dialog>
</template>
