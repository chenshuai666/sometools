<template>
  <div class="test1">
    切屏测试
    <h1>{{ studytime }}</h1>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

//学习时长
const studytime = ref(0);
//计时器
let studyTimer = null;
//进入页面
const inPage = () => {
  if (!studyTimer) {
    studyTimer = setInterval(() => {
      studytime.value++;
    }, 1000);
  }
  console.log("进入页面");
};
//离开页面
const outPage = () => {
  window.clearInterval(studyTimer);
  studyTimer = null;
  console.log("离开页面");
};

onMounted(() => {
  // document.body.onblur = test
  if (!studyTimer) {
    studyTimer = setInterval(() => {
      studytime.value++;
    }, 1000);
  }
  window.addEventListener("blur", outPage);
  window.addEventListener("focus", inPage);
  // document.body.onblur = test
  // console.log(test2.value)
  // test2.value.addEventListener('blur', test)
});

onUnmounted(() => {
  window.removeEventListener("blur", outPage);
  window.removeEventListener("focus", inPage);
});
</script>

<style lang="scss" scoped></style>
