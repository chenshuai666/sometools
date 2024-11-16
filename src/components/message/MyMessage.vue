<template>
  <div>
    <div class="message-container">{{ props.message }}</div>
    <button @click="onClick">确定</button>
  </div>
</template>

<script setup>
const props = defineProps(["message", "onClick"]);
// console.log(props.isShow.value);
</script>

<style lang="scss" scoped></style>
