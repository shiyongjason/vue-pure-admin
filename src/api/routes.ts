// import { http } from "@/utils/http";
import { asyncNewRoutes } from "./asyncRoutes";
console.log("🤡 ~ asyncNewRoutes:", asyncNewRoutes)

// type Result = {
//   success: boolean;
//   data: Array<any>;
// };

export const getAsyncRoutes = () => {
  // return http.request<Result>("get", "/get-async-routes");
  return new Promise(
    resolve => { resolve(asyncNewRoutes); }
  )
};
