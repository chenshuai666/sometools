import http from "../utils/request";

const chooseBlockApi = {};

chooseBlockApi.getBlockList = function () {
  return http({
    method: "get",
    url: "/api/list/2",
  });
};

export default chooseBlockApi;
