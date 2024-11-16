<template>
    <div>
        <div class="box" v-hasRole="['admin']">admin</div>
        <div class="box" v-hasRole="['test']">test</div>
        <!-- <input type="radio" name="roles" value="admin" @change="changeRole">admin 
        <input type="radio" name="roles" value="test" @change="changeRole">test  -->
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import {useUserStore} from '@/store/index.js'

const user = useUserStore()
const changeRole = (e) => {
    // console.log(e.target.value)
    user.changeRole(e.target.value)
}
</script>

<style lang="scss" scoped>
.box{
    height: 200px;
    background-color: aqua;
    text-align: center;
    line-height: 200px;
    margin-bottom: 20px;
}
</style>