import http from "../utils/request";

const vListApi = {};

vListApi.getList = function getList(data) {
  return http({
    url: "/api/list/1",
    method: "get",
  });
};

export default vListApi;
