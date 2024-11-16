<template>
    <div class="test"></div>
    <count-to :start="0" :end="218" :duration="3000" :auto="false" :isScrollIn="true"></count-to>
    
    <count-to :start="0" :end="218" :duration="3000" :auto="false" ref="myRef" ></count-to>
    <button @click="startCount">开始计数</button>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const myRef = ref(null)
  const startCount = () => {
    myRef.value.startCount()
  }
  onMounted(() => {
    // console.log(myRef.value.startCount)
    // myRef.value.startCount()
  })
  </script>
  
  <style scoped>
  .test{
    width: 200px;
    height: 2000px;
    background-color: aquamarine;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  </style>
  