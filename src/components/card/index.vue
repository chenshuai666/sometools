<script setup>
import { floor } from "@/utils/math.js";

const props = defineProps({
  itemTotal: {
    type: Object,
  },
});
// console.log(attrs);

const width = computed(() => props.itemTotal.itemInfo.width);
const height = computed(() => props.itemTotal.itemInfo.imgHeight);
</script>

<template>
  <div class="card-container">
    <div
      class="cover"
      :style="{ width: width + 'px', height: height + 'px' }"
    ></div>
    <div class="footer">
      <a href="" class="title">
        <span>{{
          props.itemTotal.itemInfo["note_card"]["display_title"]
        }}</span>
      </a>
      <div class="author-wrapper">
        <a href="" class="author">
          <span>{{ props.itemTotal.itemInfo["note_card"].user.nickname }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  .cover {
    background-color: aqua;
    border-radius: 16px;
  }
  .footer {
    box-sizing: border-box;
    padding: 12px;
    .title {
      margin-bottom: 8px;
      word-break: break-all;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
      color: var(--color-primary-label);
    }
    .author-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 20px;
      color: var(--color-secondary-label);
      font-size: 12px;
      transition: color 1s;
    }
  }
}
</style>
