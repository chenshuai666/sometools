<template>
  <div>
    <button @click="upload">上传文件</button>
  </div>
</template>

<script setup>
const upload = async () => {
  const fileList = await window.showDirectoryPicker();
  console.log(fileList);
};
</script>

<style lang="scss" scoped></style>
