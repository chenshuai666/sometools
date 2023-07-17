<template>
    <div>
        <span @click="startCount" ref="mycount">{{ localStart }}</span>
    </div>
</template>

<script>
export default {
    name: 'CountTo'
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
    start: { default: () => 0 },
    end: { default: () => 0 },
    duration: { default: () => 0 },
    auto: { default: () => true },
    isScrollIn: false
})
const mycount = ref(null)

let localStart = ref(props.start)
let startTime,localTimestamp,rAF

const add = () => {
    localStart.value++
    console.log(localStart.value,props.start)
}

const startCount = () => {
    return window.requestAnimationFrame(countUp)
}

defineExpose({
    startCount
})

const countUp = (timestamp) => {
    if (!startTime) startTime = timestamp
    localTimestamp = timestamp
    let distance = timestamp - startTime > props.duration ? props.duration : timestamp - startTime
    // console.log(rAF)
    if (localStart.value < props.end) {
        localStart.value = parseInt(props.start + (props.end - props.start) * distance / props.duration)
    }
    if (distance >= props.duration) {
        return rAF = window.cancelAnimationFrame(rAF)
    }

    rAF = window.requestAnimationFrame(countUp)
}
// let start = props.start
// let end = props.end
onMounted(() => {
    if (props.auto) {
        startCount()
    }
    // console.log(mycount.value)
    if (props.isScrollIn) {
        let observer = new IntersectionObserver((entries) => {
            // console.log(entries[0])
            if (entries[0].isIntersecting) {
                startCount()
                observer.unobserve(mycount.value)
            }
        })
        observer.observe(mycount.value)
    }
    
})

</script>

<style lang="scss" scoped>

</style>