<template>
  <div class="app-container">
    <RePage>
      <avue-crud
        ref="crud"
        v-model="form"
        class="crud-table"
        :option="tableOption"
        :data="list"
        :page="page"
        :search="searchForm"
        :table-loading="loading"
        :header-cell-class-name="() => 'crud-table-head'"
        :cell-class-name="() => 'crud-cell'"
        @on-load="getList()"
        @search-change="searchChange"
        @refresh-change="getList()"
      >
        <template #menu-left>
          <el-button
            type="primary"
            icon="el-icon-plus"
            @click="handleAddA('add')"
            >添加执行项目库</el-button
          >
        </template>
      </avue-crud>
    </RePage>
    <addDialog ref="dialog" />
  </div>
</template>
<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { ElMessage } from "element-plus";
import addDialog from "./components/add.vue";
import { RePage } from "@/components/RePage";
import { form_option } from "./indexOption.js";
const reload = ref(Math.random());
const loading = ref(false);
const dialog = ref(null);
const page = ref({
  total: 10, // 总页数
  currentPage: 1, // 当前页数
  pageSize: 10 // 每页显示多少条
});
const searchForm = reactive({});
const form = ref({});
const list = ref([
  {
    username: "smallwei",
    password: "smallwei"
  },
  {
    username: "avue",
    password: "avue"
  }
]);

const tableOption = computed(() => {
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

const getList = () => {};

function searchChange() {
  if (crud.value) {
    crud.value.refreshTable();
    ElMessage.success("初始化完成");
  }
}

// 新增
const handleAddA = type => {
  console.log(type);
  dialog.value.open(type);
};
</script>
<style scoped lang="scss">
.app-container {
  padding: 10px;
  background-color: #fff;
}
</style>
