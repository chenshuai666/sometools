<template>
  <div>
    <input type="text" @input="test" :value="childMessage" />
  </div>
</template>

<script setup>
// const text = ref("");
const props = defineProps(["childMessage"]);
const emit = defineEmits(["updateVal"]);
// console.log(typeof props.childMessage);
const test = (val) => {
  // text.value = val.target.value;
  // console.log(val.target.value);
  emit("updateVal", val.target.value);
};
</script>

<style lang="scss" scoped></style>
