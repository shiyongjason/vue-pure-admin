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
      label: "姓名",
      prop: "name",
      cellRenderer: ({ row }) => <el-input v-model={row.name} />
    },
    {
      label: "爱好",
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
      label: "日期",
      prop: "date",
      cellRenderer: ({ row }) => (
        <el-date-picker
          v-model={row.date}
          type="date"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
          placeholder="请选择日期"
        />
      ),
      minWidth: 110
    },
    {
      label: "操作",
      fixed: "right",
      width: 90,
      slot: "operation"
    }
  ]);

  function onPush() {
    columns.value.push({
      label: "姓名",
      prop: "name",
      cellRenderer: ({ row }) => <el-input v-model={row.name} />
    });
  }

  return {
    columns,
    onPush
  };
}
