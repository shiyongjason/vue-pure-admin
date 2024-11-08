import { http } from "@/utils/http";

/** 列表 */
export const getListData = data => {
  return http.request("post", "/project/projectLibrary/execution/listData", {
    data
  });
  // return http.request<UserResult>("post", "/pc/login", { data });
};
