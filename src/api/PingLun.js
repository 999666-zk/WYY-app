import request from "../utils/request";
export const getPingLun = (params) =>
  request({
    method: "GET",
    url: "/comment/music",
    params,
  });
