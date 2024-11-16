<script setup>
import { floor } from "@/utils/math.js";
import { debounce } from "lodash-es";
import { nextTick } from "vue";

const footerHeight = 71.6;
const props = defineProps({
  request: Function,
  gap: {
    type: Number,
    default: 10,
  },
  itemMinWidth: {
    type: Number,
    default: 250,
  },
  columns: {
    type: Number,
    default: 5,
  },
  minColumns: {
    type: Number,
    default: 2,
  },
});

const containerRef = ref();

const listInfo = reactive({
  totalList: [],
  totalListPos: [],
  showList: [],
});

const itemConfig = reactive({
  width: props.itemMinWidth,
  columns: props.columns,
});

const computeItemConfig = () => {
  const { itemMinWidth, columns, gap, minColumns } = props;
  if (containerRef.value === null) return;
  const containerWidth = containerRef.value.clientWidth;
  // console.log(containerRef.value.getClientRects());
  // console.log(containerRef.value.clientWidth);
  // console.log(containerRef.value.getBoundingClientRect());
  let realWidth = itemMinWidth;
  let realColumns = minColumns;
  for (let i = columns; i > 1; i--) {
    // console.log((itemMinWidth + gap) * i - gap, containerWidth);
    if ((itemMinWidth + gap) * i - gap <= containerWidth) {
      realWidth = floor((containerWidth - gap * (i - 1)) / i, 2);
      realColumns = i;
      break;
    }
  }
  console.log("realWidth: ", realWidth);
  console.log("realColumns: ", realColumns);
  Object.assign(itemConfig, {
    width: realWidth,
    columns: realColumns,
  });
  return;
};

/**
 *
 * 计算每个卡片的偏移量
 */
class itemPositions {
  constructor(columns, width) {
    this.positionQueue = new Array(columns).fill(0);
    this.shortest = 0;
    this.width = width;
  }
  get x() {
    return this.shortest * (this.width + props.gap);
  }
  get y() {
    return this.positionQueue[this.shortest];
  }
  add(height) {
    // const res = this.shortest;
    this.positionQueue[this.shortest] += height;
    this.shortest = this._findMin();
    // return res;
  }
  _findMin() {
    let l = 0;
    let r = this.positionQueue.length - 1;
    while (l < r) {
      this.positionQueue[l] <= this.positionQueue[r] ? r-- : l++;
    }
    return l;
  }
}

/**
 * 计算图片显示比例
 * @param {Number} num
 */
const imgScale = (num) => {
  if (num < 0.75) return 0.75;
  if (num > 4 / 3) return 4 / 3;
  return num;
};
/**
 * 计算图片高度
 * @param {Number} width
 * @param {Number} imgWidth
 * @param {Numner} imgHeight
 */
const getHeight = (width, imgWidth, imgHeight) => {
  const scale = imgScale(imgHeight / imgWidth);
  return floor(scale * width, 2);
};

const getList = async () => {
  const {
    data: { items: list },
  } = await props.request();
  // const positionList = [];

  Object.assign(listInfo.totalList, list);
  // console.log(listInfo.totalList);
};

const computedPosition = () => {
  const help = new itemPositions(itemConfig.columns, itemConfig.width);
  for (let item of listInfo.totalList) {
    const { width, height } = item["note_card"].cover;
    const realItemWidth = itemConfig.width;
    const realImgHeight = getHeight(realItemWidth, width, height);
    const realItemHeight = floor(realImgHeight + footerHeight, 2);
    const x = help.x;
    const y = help.y;
    help.add(realItemHeight);
    const itemPositionInfo = {
      width: realItemWidth,
      height: realItemHeight,
      imgHeight: realImgHeight,
      x,
      y,
    };
    // console.log(itemPositionInfo);
    Object.assign(item, itemPositionInfo);
  }
};
let isResize = true;
const resizeObserve = new ResizeObserver((entries) => {
  if (isResize) {
    return handlerResize();
  }
  isResize = true;
});

const handlerResize = debounce(
  () => {
    init();
  },
  10,
  { leading: true }
);
console.log(handlerResize);
const init = () => {
  // console.log(itemConfig);
  computeItemConfig();
  // console.log(itemConfig);
  computedPosition();
};
// const loaded = ref(false);
onMounted(async () => {
  await getList();
  // loaded.value = true;
  // await nextTick();
  // init();
  resizeObserve.observe(containerRef.value);
  // init();
});

onBeforeUnmount(() => {
  containerRef.value && resizeObserve.unobserve(containerRef.value);
});
</script>

<template>
  <div class="water-fall" ref="containerRef">
    <section
      class="water-fall-item"
      v-for="item in listInfo.totalList"
      :key="item.id"
      :style="{
        width: item.width + 'px',
        transform: `translate3d(${item.x}px, ${item.y}px, 0)`,
      }"
    >
      <slot name="item" :itemInfo="item" :itemConfig="itemConfig"></slot>
    </section>
  </div>
  <!-- <div class="placeholder" v-else="showed"></div> -->
</template>

<style lang="scss" scoped>
.water-fall {
  position: relative;
  &-item {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
