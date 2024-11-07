<template>
  <el-dialog
    v-model="isShow"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    lock-scroll
    :title="'选择科目'"
    :append-to-body="true"
    width="500px"
    class="pure-dialog"
  >
    <avue-tree
      ref="tree"
      v-model="form"
      :data="data"
      :option="option"
      @check-change="checkChange"
    >
    </avue-tree>
    <template #footer>
      <div class="crud-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup>
import { ref, onMounted, toRaw } from "vue";
import { ElMessage } from "element-plus";
const isShow = ref(false);

const tree = ref(null);
const form = ref({});
const data = ref([
  {
    value: 0,
    label: "一级部门",
    children: [
      { value: 1, label: "一级部门1" },
      { value: 2, label: "一级部门2" }
    ]
  },
  {
    value: 3,
    label: "二级部门",
    children: [
      { value: 4, label: "二级部门1" },
      { value: 5, label: "二级部门2" }
    ]
  }
]);
const option = ref({
  defaultExpandAll: true,
  multiple: true,
  addBtn: false,
  formOption: {
    labelWidth: 100,
    column: [
      { label: "自定义项", prop: "label" },
      { label: "测试", prop: "test" }
    ]
  }
});

const checkChange = (data, checked, indeterminate) => {
  console.log(JSON.stringify(data));
};

onMounted(() => {
  // tree.value.setCheckedKeys([0]);
});
const $emit = defineEmits(["func"]);
const handleClose = () => {
  isShow.value = false;
};
const submit = () => {
  // ElMessage.success("提交成功");
  console.log(toRaw(tree.value.getCheckedNodes()));
  $emit("func", tree.value.getCheckedNodes());
  isShow.value = false;
};
const open = () => {
  isShow.value = true;
};
defineExpose({ open });
</script>
