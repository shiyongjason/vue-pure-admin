import { guide } from "@/router/enums";

export default {
  path: "/target",
  redirect: "/target/index",
  meta: {
    icon: "ep:guide",
    title: "项目管理",
    rank: guide
  },
  children: [
    {
      path: "/target/index",
      name: "target",
      component: () => import("@/views/targetManage/guide/index.vue"),
      meta: {
        title: "预算项目"
      }
    },
    {
      path: "/guide1/index",
      name: "Guide",
      component: () => import("@/views/targetManage/guide/index.vue"),
      meta: {
        title: "测试table"
      }
    }
  ]
} satisfies RouteConfigsTable;
