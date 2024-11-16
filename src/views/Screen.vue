<template>
    <div class="echarts-container">
        <div class="box" ref="box">
            <Map class="map"></Map>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Map from './screen/Map.vue'


function getScale(w=1920, h=1080) {
    const ww = window.innerWidth / w
    const wh = window.innerHeight / h
    return ww < wh ? ww : wh
}

const box = ref()

onMounted(() => {
    box.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
})

window.onresize = () => {
    box.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
}
</script>

<style lang="scss" scoped>
.echarts-container{
    width: 100vw;
    height: 100vh;
    background-color: aqua;
    // display: flex;
    .box{
        position: fixed;
        width: 1920px;
        height: 1080px;
        display: flex;
        transform-origin: left top;
        left: 50%;
        top: 50%;
        background-color: pink;
    }
    .map{
        flex: 1;
    }
}
</style>