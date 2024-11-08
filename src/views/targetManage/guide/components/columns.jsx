import { ref } from "vue";
export function useColumns() {
  const options = [
    {
      label: "足球",
      value: "football"
    },
    {
      label: "篮球",
      value: "basketball"
    },
    {
      label: "乒乓球",
      value: "pingpang"
    }
  ];
  const columns = ref([
    {
      label: "采购方式",
      prop: "name",
      cellRenderer: ({ row }) => <el-input v-model={row.name} />
    },
    {
      label: "采购品目",
      prop: "hobby",
      cellRenderer: ({ row }) => (
        <el-select v-model={row.hobby} clearable placeholder="请选择爱好">
          {options.map(item => {
            return (
              <el-option
                key={item.value}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </el-select>
      )
    },
    {
      label: "业务经办人",
      prop: "date",
      cellRenderer: ({ row }) => (
        <el-select v-model={row.date} clearable placeholder="请选择爱好">
          {options.map(item => {
            return (
              <el-option
                key={item.value}
                label={item.label}
                value={item.value}
              />
            );
          })}
        </el-select>
      ),
      width: 110
    },
    {
      label: "测算说明",
      prop: "P8",
      cellRenderer: ({ row }) => <el-input v-model={row.P8} />
    },
    {
      label: "备注",
      prop: "P7",
      cellRenderer: ({ row }) => <el-input v-model={row.P7} />
    },
    {
      label: "操作",
      fixed: "right",
      width: 90,
      slot: "operation"
    }
  ]);

  function onPush(flag, val, index) {
    if (flag) {
      columns.value.unshift({
        label: val.label,
        prop: val.prop,
        cellRenderer: ({ row }) => <el-input v-model={row[val.prop]} />
      });
    } else {
      columns.value.splice(index, 1);
    }
  }

  return {
    columns,
    onPush
  };
}
