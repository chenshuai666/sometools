<template>
    <div class="map-container" ref="map">

    </div>
</template>

<script setup>
const map = ref()

//引入echarts
import * as echarts from 'echarts'
import { onMounted } from 'vue';
import chinaJSON from './china.json'

echarts.registerMap('china', {geoJSON: chinaJSON})
onMounted(() => {
    let myChart = echarts.init(map.value)
    myChart.setOption({
        title: {
            text: '地图'
        },
        geo: {
            map: 'china',
            roam: 'scale',
            label: {
                show: true
            },
            zoom: 1.1,
        }
    })
})
</script>

<style lang="scss" scoped>

</style>