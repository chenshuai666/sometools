<template>
  <div class="choose-page" ref="container">
    <div class="mask" ref="mask"></div>
    <div class="container">
      <div
        class="items"
        :class="{ choosed: choosed.has(item.id) }"
        v-for="item in list"
        :key="item.id"
        :data-id="item.id"
        ref="itemRefs"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import chooseBlockApi from "../api/chooseBlock";
import { throttle } from "lodash-es";

const list = reactive([]);
const container = ref();
const mask = ref();
const choosed = reactive(new Set());
const itemRefs = ref();

const getLayer = (e) => {
  end.x = e.layerX;
  end.y = e.layerY;
  const startX = Math.min(start.x, end.x);
  const startY = Math.min(start.y, end.y);
  const height = Math.abs(start.y - end.y);
  const width = Math.abs(start.x - end.x);

  const blocks = document.querySelectorAll(".items");
  for (let block of blocks) {
    const { x: borderX, y: borderY } = container.value.getBoundingClientRect();
    const {
      x,
      y,
      width: blockWidth,
      height: blockHeight,
    } = block.getBoundingClientRect();
    const covered = isCovered(
      x - borderX,
      y - borderY,
      blockWidth,
      blockHeight,
      startX,
      startY,
      width,
      height
    );
    if (covered) {
      // console.log(block.dataset);
      choosed.add(parseInt(block.dataset.id));
      console.log(choosed, list[0].id);
    }
    // console.log(borderX, borderY);
  }
  // console.log(startX, startY, height, width);
  const change = {
    transform: `translate(${startX}px, ${startY}px)`,
    height: height + "px",
    width: width + "px",
  };
  // mask.value.style.transform = `translate(${startX}px, ${startY}px)`;
  // mask.value.style.height = Math.abs(start.y - end.y) + "px";
  // mask.value.style.width = Math.abs(start.x - end.x) + "px";
  Object.assign(mask.value.style, change);
  return {
    layerX: e.layerX,
    layerY: e.layerY,
  };
};

const resetMask = () => {
  const reset = {
    transform: `translate(0, 0)`,
    height: 0,
    width: 0,
  };
  Object.assign(mask.value.style, reset);
};

const isCovered = (
  itemX,
  itemY,
  itemWidth,
  itemHeight,
  startX,
  startY,
  width,
  height
) => {
  // console.log(
  //   itemX,
  //   itemY,
  //   itemWidth,
  //   itemHeight,
  //   startX,
  //   startY,
  //   width,
  //   height
  // );
  if (
    itemX > startX + width ||
    itemY > startY + height ||
    itemX + itemWidth < startX ||
    itemY + itemHeight < startY
  ) {
    return false;
  }
  return true;
};

const start = {
  x: 0,
  y: 0,
};
const end = {
  x: 0,
  y: 0,
};
const areas = {
  width: 0,
  height: 0,
};

const throttleGetLayer = throttle(getLayer, 20);

onMounted(async () => {
  await chooseBlockApi.getBlockList().then((res) => {
    list.length = 0;
    list.push(...res.data.data);
  });
  // const block = document.querySelector(".items");
  // const rect = block.getBoundingClientRect();
  // const rect2 = container.value.getBoundingClientRect();
  // console.log(rect, rect2);
  container.value.addEventListener("mousedown", (e) => {
    // console.log(e);
    e.preventDefault();
    start.x = e.layerX;
    start.y = e.layerY;
    // mask.value.style.transform = `translate(${e.layerX}px, ${e.layerY}px)`;
    container.value.addEventListener("mousemove", throttleGetLayer);
  });
  container.value.addEventListener("mouseup", () => {
    container.value.removeEventListener("mousemove", throttleGetLayer);
    resetMask();
  });
  console.log(itemRefs.value);
});
</script>

<style lang="scss" scoped>
.choosed {
  background-color: yellowgreen;
}
.choose-page {
  position: relative;
}
.mask {
  position: absolute;
  background-color: blue;
  opacity: 0.2;
}

.container {
  width: 800px;
  height: 1600px;
  border: 1px solid black;
  padding: 50px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(auto-fill, 80px);
  .items {
    // width: 80px;
    // height: 80px;
    border: 1px red solid;
  }
}
</style>
