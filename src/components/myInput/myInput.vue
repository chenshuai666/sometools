<template>
  <div>
    <el-input v-bind="$attrs">
      <template></template>
    </el-input>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
console.log(useAttrs());
</script>

<style lang="scss" scoped></style>
