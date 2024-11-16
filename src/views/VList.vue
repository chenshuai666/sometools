<template>
  <div class="v-list-container" ref="list">
    <div
      class="v-list-scrollbar"
      :style="{ height: contentHeight + 'px' }"
    ></div>
    <div
      class="v-list-main"
      ref="listmain"
      :style="{ transform: `translateY(${translateY}px)` }"
    >
      <div class="v-list-item" v-for="{ name, id } of visibleList" :key="id">
        <div>{{ name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, reactive, ref, toRef } from "vue";
import vListApi from "@/api/vlist.js";
import { throttle } from "lodash-es";

const listInfo = reactive({
  page: 1,
  list: [],
});

const list = ref();
const listmain = ref();
//获取列表数据
const getList = async () => {
  const { data } = await vListApi.getList();
  listInfo.list = data.data;
  // await nextTick();
  // console.log(listmain.value.children[1].offsetTop);
  // itemHeight.value =
  //   listmain.value.children[1].offsetTop - listmain.value.children[0].offsetTop;
};

//容器高度
const containerHeight = ref(0);
//获取元素高度
const itemHeight = ref(60);
//设置滚动条总高度
const contentHeight = computed(() => {
  return itemHeight.value * listInfo.list.length;
});
//记录滚动高度
const scollheight = ref(0);
//展示元素数量
const itemCount = computed(() =>
  Math.ceil(containerHeight.value / itemHeight.value)
);
//起始元素下标
const startIndex = computed(() =>
  Math.floor(scollheight.value / itemHeight.value)
);
// 可显示列表
const visibleList = computed(() => {
  return listInfo.list.slice(
    startIndex.value,
    startIndex.value + itemCount.value + 1
  );
});
//偏移量
const translateY = computed(() => {
  return scollheight.value - (scollheight.value % itemHeight.value);
});

onMounted(() => {
  containerHeight.value = list.value.clientHeight;
  getList();
  console.log(list.value.clientHeight);
  list.value.addEventListener(
    "scroll",
    throttle(() => {
      // console.log(list.value.scrollTop);
      scollheight.value = list.value.scrollTop;
    }, 100)
  );
});
</script>

<style lang="scss" scoped>
.v-list-container {
  width: 400px;
  height: 600px;
  border: 1px solid black;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
  // &::-webkit-scrollbar {
  //   width: 0;
  // }
  .v-list-scrollbar {
    position: absolute;
    width: 1px;
  }
  .v-list-main {
    position: absolute;
    // left: 0;
    // top: 0;
    // right: 0;
    width: 100%;
    .v-list-item {
      height: 50px;
      background-color: aqua;
      border-radius: 25px;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}
</style>
