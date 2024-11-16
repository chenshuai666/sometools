<template>
  <div>
    <Child :childMessage="message" @updateVal="changeVal"></Child>
    {{ message }}
    <hr />
    <form action="" @submit="submit">
      <input type="text" name="name" />
      <input type="submit" value="提交" />
    </form>
  </div>
  <hr />
  <button @click="request">test</button>
  <div>my input: {{ input }}</div>
  <my-input clearable @click="testBtn" v-model="input"></my-input>
  <my-input
    :modelValue="input"
    @update:modelValue="(event) => (input = event)"
  ></my-input>
  <!-- <button @click="createNode1">test1</button>
  <button @click="createNode2">test2</button> -->
  <button @click="showMessage">showMessage</button>
  <button @click="add">add</button>
  <!-- <button @click="showElMessage">ElMessage</button> -->
  <div>{{ count }}</div>
</template>

<script setup>
import Child from "./Child.vue";
import http from "@/utils/request.js";
import myInput from "../../components/myInput/myInput.vue";
import showMsg from "@/components/message/message.js";
import { add as lAdd } from "lodash-es";
// import { ElMessage } from "element-plus";
// import { onMounted, reactive } from 'vue';
// import { createNode1, createNode2 } from "@/components/message/test.js";
import { useCounterStore } from "@/store/index.js";

const { count } = toRefs(useCounterStore());
// console.log("counter: ", count);
const a1 = ref(1);
const addNum = lAdd(a1, 2);

const input = ref("");

const testBtn = (e) => {
  console.log(e.target);
};

//watch
let watchTest = ref(1);
function add() {
  watchTest.value++;
  count.value++;
  // console.log(watchTest);
}
watch(
  () => watchTest.value,
  (value) => {
    console.log(value);
  }
);

const message = ref("");
const changeVal = (val) => {
  // console.log(a);
  message.value = val;
};

const submit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  // console.log(formData.get("name"));
  http.post("/api3", formData, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};

const obj = { a: 1, b: 2 };
const request = () => {
  http.post("/api", obj, {
    headers: {
      "content-type": "application/json",
    },
  });
  http.post("/api2", obj, {
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  http.post("/api3", obj, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  fetch("http://127.0.0.1:3000/fetch1", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  fetch("http://127.0.0.1:3000/fetch2", {
    method: "post",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: obj,
  });
  fetch("http://127.0.0.1:3000/fetch3", {
    method: "post",
    headers: {
      "content-type": "multipart/form-data",
    },
    body: obj,
  });
};

const showMessage = () => {
  showMsg(input.value);
};

let stateA = reactive({ a: 1 });
let stateB = ref({ b: 1 });
let { a } = stateA;
let { b } = stateB.value;
a++;
b++;
console.log("a: ", stateA, a);
console.log("b: ", stateB.value, b);
// onMounted(() => {});

const info = inject("info");
// const showElMessage = () => {
//   ElMessage(info);
// };
</script>

<style lang="scss" scoped></style>
