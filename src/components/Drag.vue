<template>
    <div>
        <ul ref="container">
            <li v-for="(item,i) in mynodes"
            :key="item.name"
                draggable="true"
                @drag="toDrag"
                @dragstart="toDragstart($event, i)"
                @dragenter="toDragenter($event, i)"
                @dragend="toDragend"
                >
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const container = ref(null)
let droppos

const mynodes = reactive([])
for (let i = 0; i < 26; i++) {
    mynodes.push({name: String.fromCodePoint(i+65), id: i+1})
}

const toDrag = (e) => {
    // console.log(e)
}

const toDragstart = (e, index) => {
    e.stopPropagation()
    // console.log('dragstart: ', e)
    droppos = index
    e.target.classList.add('moving')
    e.dataTransfer.dropEffect = 'move'
}

const toDragenter = (e, index) => {
    e.preventDefault()
    // console.log('dragenter: ', index)
    if (droppos !== index) {
        const dragel = mynodes.splice(droppos, 1)
        mynodes.splice(index, 0, ...dragel)
        droppos = index
    }
}

const toDragend = (e) => {
    // console.log('dragend: ', e.target)
    // console.log(container.value)
    // container.value.insertBefore(e.target, droppos.nextSibling)
    // console.log(mynodes)
    e.target.classList.remove('moving')
}

</script>

<style lang="scss" scoped>
ul{
    li{
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: 1px solid black;
        width: 200px;
        cursor: pointer;
        background-color: aqua;
        margin: 10px;
    }
}
.moving{
    opacity: 0.5;
}
</style>