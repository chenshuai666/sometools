<template>
  <div>
    <div v-overflow class="text">
      Element.getBoundingClientRect()方法返回Element元素的大小及其相对视口的位置
      x, y是该元素左上角相对于浏览器视口左上角的坐标 bottom， left，right，
      top是该元素相对于浏览器视口左上角的距离 width, height是该元素的宽度和高度
    </div>
    <div class="container" ref="container">
      <div
        class="test"
        v-for="item of list.a"
        :style="{ width: item.a + 'px' }"
      >
        {{ item }}
      </div>
    </div>
    <button @click="add">btn</button>
    <div>
      <input type="text" name="worker" id="" v-model.number="num" />
      <button @click="fib">worker</button>
    </div>
  </div>
</template>

<script setup>
const list = reactive({ a: [{ a: 100 }] });
const container = ref();
const resizeObserve = new ResizeObserver((entries) => {});
const add = () => {
  Object.assign(list.a, [{ a: 200 }]);
};
onBeforeUnmount(() => {
  console.log(container.value);
});

const num = ref(1);
const fib = () => {
  const worker = new Worker(new URL("@/worker/worker.js", import.meta.url));
  worker.addEventListener("message", (res) => {
    const { data } = res;
    console.log(data, num.value);
    // console.log(data, num.value);
    // console.log(111, "222");
  });
  worker.postMessage(num.value);
};
</script>

<style lang="scss" scoped>
.test {
  height: 200px;
  background-color: red;
}
.text {
  font-size: 20px;
  width: 200px;
  height: 100px;
  overflow: hidden;
}
</style>
