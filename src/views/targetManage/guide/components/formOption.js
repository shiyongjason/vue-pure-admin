import { commonFormOptions } from "@/utils/const";
// 指标管理
export function form_option() {
  // const self = this;
  return {
    ...commonFormOptions,
    labelWidth: 130,
    labelPosition: "top",
    // addBtn: true,
    // size: "small",
    // dialogFullscreen: true,
    // detail: true,
    span: 12,
    gutter: 24,
    column: [
      {
        label: "编报计划",
        prop: "payer",
        type: "select",
        rules: [
          {
            required: true,
            message: "编报计划",
            trigger: "change"
          }
        ]
      },
      {
        label: "预算年度",
        prop: "year",
        type: "year"
      },
      {
        label: "项目新增方式",
        prop: "settlementAmount",
        type: "select",
        suffixIcon: ""
      },
      {
        label: "项目名称",
        prop: "billNo",
        type: "input"
      },
      {
        label: "项目编码",
        prop: "billNo",
        type: "input"
      },
      {
        label: "项目类型",
        prop: "projectName",
        // type: "input",
        prop: "tree",
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
        label: "支出功能科目",
        prop: "projectName",
        // type: "input",
        prop: "tree",
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
        label: "履职分类",
        prop: "projectName",
        // type: "input",
        prop: "tree",
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
        label: "项目负责人",
        prop: "projectName",
        // type: "input",
        prop: "tree",
        type: "tree",
        filterable: true,
        iconClass: "#icon-tingche3",
        dicData: [
          {
            label: "海事",
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
        label: "编报组织",
        prop: "p5",
        type: "select",
        filterable: true,
        overHidden: true
      },
      {
        label: "资金保障类型",
        prop: "crewTaxAmount",
        type: "select",
        filterable: true,
        overHidden: true
      },
      {
        label: "时间",
        prop: "daterange",
        type: "daterange",
        format: "YYYY-MM-DD",
        valueFormat: "YYYY-MM-DD",
        startPlaceholder: "日期开始范围自定义",
        endPlaceholder: "日期结束范围自定义"
      },
      {
        label: "编报绩效",
        prop: "billSalaryList",
        row: true
      },
      {
        label: "项目内容",
        prop: "billSalaryList",
        row: true,
        type: "textarea"
      }
    ]
  };
}
