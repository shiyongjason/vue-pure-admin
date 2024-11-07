<template>
  <el-dialog
    v-model="isShow"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    lock-scroll
    :title="'选择科目'"
    :append-to-body="true"
    width="500px"
  >
    <template #footer>
      <div class="form-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
const isShow = ref(false);
const handleClose = () => {
  isShow.value = false;
};
const submit = () => {
  ElMessage.success("提交成功");
  isShow.value = false;
};
const open = () => {
  isShow.value = true;
};
defineExpose({ open });
</script>
