<template>
    <div>
        <div>
            <input type="text" v-model="todo">
            <button @click="addTodo">Add Todo</button>
        </div>
        <div>
            <ul>
                <li v-for="item in todolist" :class="{isDone:item.isDone}">
                    {{ item.todo }}
                    <button @click="toDone(item)">Done</button>
                </li>
            </ul>
        </div>
        <button @click="toDelete">Delete Done</button>
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';


const todo = ref('')
const todolist = reactive([])

const addTodo = () => {
    todolist.push({ todo: todo.value, isDone: false })
    todo.value = ''
}

const toDone = (item) => {
    item.isDone = !item.isDone
}

const toDelete = () => {
    let arr = todolist.filter(todo => {
        return !todo.isDone
    })
    todolist.length = 0
    todolist.push(...arr)
    console.log(todolist)
}

// const notDone = computed(() => {
//     return todolist.filter(item => !item.isDone)
// })
</script>

<style lang="scss" scoped>
.isDone{
    text-decoration-line: line-through;
}
</style>