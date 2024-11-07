import { commonTableOptions } from "@/utils/const";

// 指标管理
export function form_option() {
  // const self = this;
  return {
    ...commonTableOptions,
    labelWidth: 130,
    searchLabelWidth: 130,
    gutter: 20,
    menuSpan: 24,
    searchMenuSpan: 18, // 搜索框占格
    labelPosition: "right",
    // addBtn: true,
    header: true,
    editBtn: true,
    delBtn: true,
    viewBtn: true,
    selection: true,
    expand: true, //展开行
    // size: "small",
    // dialogFullscreen: true,
    // detail: true,
    column: [
      {
        label: "预算年度",
        prop: "payer",
        type: "date",
        span: 12,
        search: true,
        width: 100,
        overHidden: true,
        row: true
      },
      {
        label: "编报部门",
        prop: "settlementAmount",
        type: "input",
        search: true,
        span: 12,
        width: 100,
        overHidden: true,
        row: true
      },
      {
        label: "项目名称",
        prop: "billNo",
        type: "input",
        span: 12,
        width: 100,
        overHidden: true,
        search: true,
        row: true
      },
      {
        label: "项目编号",
        prop: "projectName",
        // type: "input",
        span: 12,
        search: true,
        row: true,
        prop: "tree",
        width: 100,
        overHidden: true,
        type: "tree",
        filterable: true,
        dicData: [
          {
            label: "字典1",
            value: 0,
            children: [
              {
                label: "字典3",
                value: 2
              }
            ]
          },
          {
            label: "字典2",
            value: 1
          }
        ]
      },
      {
        label: "本年度预算(元）",
        prop: "serviceAmount",
        span: 12,
        search: false,
        width: 100,
        overHidden: true,
        row: true
      },
      {
        label: "已执行预算(元）",
        prop: "serviceAmount",
        span: 12,
        search: false,
        width: 100,
        overHidden: true,
        row: true
      },
      {
        label: "剩余预算(元）",
        prop: "serviceAmount",
        span: 12,
        search: false,
        width: 100,
        overHidden: true,
        row: true
      },
      {
        label: "项目负责人",
        prop: "serviceAmount",
        span: 12,
        search: true,
        width: 100,
        overHidden: true,
        row: true
      },
      {
        label: "项目属性",
        prop: "crewTaxAmount",
        search: true,
        width: 100,
        overHidden: true,
        span: 12,
        row: true
      },
      {
        label: "项目存续期",
        prop: "totalAmount",
        span: 12,
        row: true,
        width: 100,
        overHidden: true,
        search: true,
        disabled: true
      },
      {
        label: "项目依据",
        prop: "billSalaryList",
        disabled: false,
        search: true,
        span: 12
      },
      {
        label: "支出功能科目",
        prop: "billSalaryList",
        disabled: false,
        search: true,
        width: 100,
        overHidden: true,
        span: 12
      },
      {
        label: "资金保障类型",
        prop: "billSalaryList",
        disabled: false,
        search: true,
        width: 100,
        overHidden: true,
        span: 12
      },
      {
        label: "确认状态",
        prop: "billSalaryList",
        disabled: false,
        search: false,
        width: 100,
        overHidden: true,
        span: 12
      },
      {
        label: "分解状态",
        prop: "billSalaryList",
        disabled: false,
        search: true,
        width: 100,
        overHidden: true,
        span: 12
      },
      {
        label: "支出性质",
        prop: "billSalaryList",
        disabled: false,
        search: true,
        width: 100,
        overHidden: true,
        span: 12
      },
      {
        label: "资金来源",
        prop: "billSalaryList",
        disabled: false,
        search: true,
        span: 12
      }
    ]
  };
}
