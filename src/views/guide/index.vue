<template>
  <div class="app-container">
    <avue-crud
      :key="reload"
      ref="crud"
      :data="data"
      :option="option"
      @row-del="handelDel"
    ></avue-crud>
  </div>
</template>
<script setup lang="js">
import { ref, computed } from "vue";
import { ElMessage } from "element-plus";
import { form_option } from "./indexOption.js";
const reload = ref(Math.random());
const data = ref([
  {
    username: "smallwei",
    password: "smallwei"
  },
  {
    username: "avue",
    password: "avue"
  }
]);

const option = computed(() => {
  return form_option.call(this);
});

const crud = ref(null);

// 业务操作
const handelDel = (row, index) => {
  ElMessage.success("删除成功");
};

function handleReload() {
  reload.value = Math.random();
  ElMessage.success("初始化完成");
}

function handleReload1() {
  if (crud.value) {
    crud.value.refreshTable();
    ElMessage.success("初始化完成");
  }
}
</script>
<style scoped lang="scss">
.app-container {
  padding: 10px;
  background-color: #fff;
}
</style>
