<template>
  <div>
    <button @click="requesttest">click</button>
    <!-- <div>{{ a.a }}</div>
    <div>{{ b.a }}</div> -->
    <button @click="add">add</button>
    <button @click="getApi">get</button>
    <button @click="geta">geta</button>
  </div>
</template>

<script setup>
import http from "@/utils/request.js";
// import a from "@/store/test.js";
// import b from "@/store/test.js";

const requesttest = () => {
  http({
    method: "POST",
    url: "/user",
    data: {
      name: "aaa",
      id: 21,
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const add = () => {
  // a.a++;
  // console.log(a.a, b.a);
  // console.log(a);
};

const geta = () => {
  http({
    method: "get",
    url: "test",
    params: {
      name: "aaa",
      children: {
        value: "bbb",
        goal: 100,
      },
    },
  });
};

const getApi = () => {
  const res = getArrayToStr({
    name: "aaa",
    children: {
      value: "bbb",
      goal: 100,
    },
  });
  console.log(res);
};

function getArrayToStr(params) {
  if (Object.keys(params).length == 0) return "";
  let strUrl = "?";
  for (const _urlKey of Object.keys(params)) {
    const _urlVal = params[_urlKey];
    if (_urlVal !== null && typeof _urlVal !== "undefined") {
      if (typeof _urlVal === "object") {
        for (const _key of Object.keys(_urlVal)) {
          let _k2s = _urlKey + "[" + _key + "]";
          strUrl +=
            encodeURIComponent(_k2s) +
            "=" +
            encodeURIComponent(_urlVal[_key]) +
            "&";
        }
      } else {
        strUrl +=
          encodeURIComponent(_urlKey) + "=" + encodeURIComponent(_urlVal) + "&";
      }
    }
  }
  strUrl = strUrl.slice(0, -1);
  return strUrl;
}
</script>

<style lang="scss" scoped></style>
