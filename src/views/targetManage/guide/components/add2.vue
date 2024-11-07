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
        <el-checkbox-group v-model="checkList" @change="changeCheck">
          <el-checkbox
            v-for="(item, i) in checkArr"
            :key="i"
            :label="item.label"
            :value="item.value"
          />
        </el-checkbox-group>
      </div>
    </div>
    <div class="tabs-origin">
      <div class="title">
        <IconifyIconOnline icon="ep:add-location" />经济科目
      </div>
      <div class="content">
        <avue-crud
          ref="tableRef"
          class="crud-table"
          :option="tableOption"
          :data="list"
        >
          <!-- <template #p1="{ row }">
            <el-input v-model="row.p1" />
          </template>
          <template #p3="{ row }">
            <el-input v-model="row.p3" />
          </template>
           <template #p3="{ row }" v-for="(item,i) in checkList" :key="i">
            <el-input v-model="row.p3" />
          </template> -->
          <template #menu="{ row, index, size }">
            <el-button
              type="success"
              :size="size"
              icon="el-icon-delete"
              @click="rowDel(row, index)"
              >删除</el-button
            >
          </template>
        </avue-crud>
      </div>
    </div>
    <template #footer>
      <div class="form-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="submit">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { ElMessage } from "element-plus";
import { form_option } from "./formOption";
// import { useRenderIcon } from "@/components/ReIcon/src/hooks";
const isShow = ref(false);

const formOption = computed(() => {
  return form_option.call(this);
});
const tableOption = ref({
  addBtn: false,
  addRowBtn: false,
  editBtn: false,
  saveBtn: false,
  cancelBtn: false,
  header: false,
  cellBtn: true,
  menuWidth: 100,
  column: [
    {
      label: "采购方式",
      prop: "p1",
      // $cellEdit: true,
      cell: true,
      rules: [{ required: true, message: "请输入姓名", trigger: "blur" }]
    },
    {
      label: "采购品目",
      cell: true,
      prop: "p2"
    },
    {
      label: "业务经办人",
      type: "select",
      cell: true,
      prop: "p3"
    },
    {
      label: "测算说明",
      cell: true,
      prop: "p4"
    },
    {
      label: "备注",
      cell: true,
      prop: "p5"
    }
  ]
});
const list = ref([
  {
    name: "王小明",
    sex: 0,
    age: 18,
    $cellEdit: true,
    switch: true
  },
  {
    name: "王小明",
    sex: 0,
    age: 18,
    $cellEdit: true,
    switch: true
  }
]);
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

//
const changeCheck = val => {
  console.log(val);
  tableOption.value.column = [
    {
      label: "采购方式",
      prop: "p1",
      // $cellEdit: true,
      cell: true,
      rules: [{ required: true, message: "请输入姓名", trigger: "blur" }]
    },
    {
      label: "采购品目",
      cell: true,
      prop: "p2"
    },
    {
      label: "业务经办人",
      type: "select",
      cell: true,
      prop: "p3"
    },
    {
      label: "测算说明",
      cell: true,
      prop: "p4"
    },
    {
      label: "备注",
      cell: true,
      prop: "p5"
    }
  ];
  val.forEach(element => {
    tableOption.value.column.unshift({
      label: checkArr.value[element - 1].label,
      prop: checkArr.value[element - 1].prop,
      type: "input",
      width: 120
    });
  });
};
const submit = () => {
  console.log("submit");
  ElMessage.success("提交成功");
  close();
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
