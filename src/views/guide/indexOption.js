import { commonTableOptions } from "@/utils/const";

// demo
export function form_option() {
  // const self = this;
  return {
    ...commonTableOptions,
    labelWidth: 130,
    gutter: 20,
    menuSpan: 24,
    labelPosition: "right",
    addBtn: true,
    header: true,
    editBtn: true,
    delBtn: true,
    viewBtn: true,
    // dialogFullscreen: true,
    // detail: true,
    column: [
      {
        label: "付款租户",
        prop: "payer",
        type: "input",
        span: 12,
        row: true
      },
      {
        label: "付款单号",
        prop: "billNo",
        type: "input",
        span: 12,
        row: true
      },
      {
        label: "付款项目",
        prop: "projectName",
        type: "input",
        span: 12,
        row: true
      },
      {
        label: "服务费",
        prop: "settlementAmount",
        type: "input",
        span: 12,
        row: true
      },
      {
        label: "服务费",
        prop: "serviceAmount",
        span: 12,
        row: true
      },
      {
        label: "所得税",
        prop: "crewTaxAmount",
        span: 12,
        row: true
      },
      {
        label: "总计",
        prop: "totalAmount",
        span: 12,
        row: true,
        disabled: true
      },
      {
        label: "付款明细",
        prop: "billSalaryList",
        disabled: false,
        formsolt: true,
        span: 24
      }
      // {
      //   label: "协议附件",
      //   prop: "agreementUrl",
      //   span: 24,
      //   disabled: true,
      //   formsolt: true,
      //   value: [],
      //   rules: [
      //     {
      //       required: true,
      //       message: "请上传协议附件",
      //       trigger: "change",
      //     },
      //   ],
      // },
    ]
  };
}
