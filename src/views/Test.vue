<template>
  <div ref="viewportRef" class="viewport" @scroll="handleScroll">
    <div class="content-wrap" :style="{ height: `${contentHeight}px` }">
      <div
        v-for="item in renderItems"
        :key="item.id"
        :style="{ top: `${item.top}px` }"
        class="content-item"
      >
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const ITEM_HEIGHT = 100; // 假设每个 item 的高度为 100px
const RENDER_SIZE = 15; // 假设每次渲染 15 条数据
// 假设 10000 条数据
const items = Array.from({ length: 10000 }, (v, i) => {
  return {
    id: i,
    text: `item-${i + 1}`,
    top: i * ITEM_HEIGHT,
  };
});

const startIndex = ref(0);
const viewportRef = ref(null);

const renderItems = computed(() => {
  const endIndex = startIndex.value + RENDER_SIZE;
  return items.slice(startIndex.value, endIndex);
});
// 整个列表的高度
const contentHeight = computed(() => {
  return items.length * ITEM_HEIGHT;
});

const handleScroll = () => {
  const scrollTop = viewportRef.value?.scrollTop;
  // 更新 startIndex
  startIndex.value = Math.floor(scrollTop / ITEM_HEIGHT);
};
</script>

<style>
.viewport {
  height: 800px;
  overflow-y: auto;
}
.content-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content-item {
  height: 100px; /* 假设每个项目高度为100px */
  position: absolute;
  width: 100%;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
