<template>
  <el-dialog
    v-model="isShow"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    lock-scroll
    :title="'新增'"
    :append-to-body="true"
    width="80%"
  >
    <avue-form ref="formRef" v-model="form" :option="formOption"> </avue-form>
    <div class="tabs-box">
      <el-tabs type="card">
        <el-tab-pane label="User">
          <el-descriptions class="margin-top" :column="1" :border="true">
            <!-- <template #extra>
              <el-button type="primary">Operation</el-button>
            </template> -->
            <el-descriptions-item
              label-class-name="label-class"
              label="预算总额（元）"
              >kooriookami</el-descriptions-item
            >
            <el-descriptions-item label="预算年度"
              >18100000000</el-descriptions-item
            >
            <el-descriptions-item label="各年预算金额（元）"
              >Suzhou</el-descriptions-item
            >
          </el-descriptions>
        </el-tab-pane>
        <el-tab-pane label="Config">论证信息</el-tab-pane>
        <el-tab-pane label="Role">项目附件</el-tab-pane>
      </el-tabs>
    </div>
    <div class="tabs-origin">
      <div class="title">
        <!-- <el-icon><Histogram /></el-icon> -->
        <IconifyIconOnline icon="ep:add-location" />经济科目
      </div>
      <div class="content">
        <!-- <el-checkbox-group v-model="checkList" @change="changeCheck"> -->
        <el-checkbox
          v-for="(item, i) in checkArr"
          :key="i"
          :label="item.label"
          :value="item.value"
          @change="item => changeCheck(item)"
        />
        <!-- </el-checkbox-group> -->
      </div>
    </div>
    <div class="tabs-origin">
      <div class="title">
        <IconifyIconOnline icon="ep:add-location" />经济科目
      </div>
      <div class="content">
        <el-button type="primary" @click="handleCkm">选择经济科目</el-button>
        <pure-table
          row-key="id"
          align-whole="center"
          :header-cell-style="{
            background: 'var(--el-fill-color-light)',
            color: 'var(--el-text-color-primary)'
          }"
          :data="dataList"
          :columns="columns"
        >
          <!-- <template #empty>
            <Empty fill="var(--el-svg-monochrome-grey)" class="m-auto" />
          </template> -->
          <template #operation="{ row }">
            <el-button type="primary" @click="onDel(row)">删除</el-button>
          </template>
        </pure-table>
      </div>
    </div>
    <template #footer>
      <div class="form-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </div>
    </template>
  </el-dialog>
  <kmDialog ref="kmRef" />
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { ElMessage } from "element-plus";
import { form_option } from "./formOption";
import { useColumns } from "./columns";
import kmDialog from "./kmDialog.vue";
// import { useRenderIcon } from "@/components/ReIcon/src/hooks";
const isShow = ref(false);
const kmRef = ref(null);
const { columns, onPush } = useColumns();
const formOption = computed(() => {
  return form_option.call(this);
});

const checkArr = ref([
  {
    label: "中央财政拨款（当年预算）",
    value: "1",
    prop: "p11"
  },
  {
    label: "中央财政拨款（当年预算）1",
    value: "2",
    prop: "p21"
  },
  {
    label: "中央财政拨款（当年预算）4",
    value: "3",
    prop: "p23"
  },
  {
    label: "中央财政拨款（当年预算）4",
    value: "4",
    prop: "p24"
  }
]);
const dataList = ref([
  {
    id: 1,
    name: "王小明",
    sex: 0,
    hobby: "football",
    date: "2020-01-01"
  }
]);
// 多选
const checkList = ref(["1"]);
const form = ref({});
const close = () => {
  isShow.value = false;
};
const open = () => {
  console.log("open");
  isShow.value = true;
};

// 触发事件
const handleClose = () => {
  // close();
  show.value = false;
};

// 多选项
const changeCheck = val => {
  console.log(val);
  onPush(val);
};

// 选择经济科目
const handleCkm = () => {
  console.log("handleCkm");
  kmRef.value.open();
};
const submit = () => {
  console.log("submit");
  ElMessage.success("提交成功");
  close();
};
const onDel = row => {
  ElMessage.success("删除成功");
};
//
defineExpose({
  open
});
</script>

<style lang="scss" scoped>
.tabs-box {
  padding: 0 20px;
}
.label-class {
  width: 130px;
}
.title {
  margin: 10px 0 0 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  background: rgb(235, 235, 235);
  padding: 5px;
}
.content {
  padding: 0 20px;
}
.form-footer {
  display: flex;
  justify-content: center;
}
</style>
