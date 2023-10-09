<template>
    <div>
        <span>账号：</span><input type="text" name="username" v-model="form.username"><br>
        <span>密码：</span><input type="password" name="password" v-model="form.password"><br>
        <button @click="login(form)" :disabled="isLoging">登录</button>
        <button @click="logout">注销</button>
    </div>
</template>

<script setup>
import http from '../utils/request';
import {useUserStore} from '../store/index.js'

const isLoging = ref(false)
const user = useUserStore()
const form = reactive({
    username: '',
    password: ''
})
const login = (form) => {
    isLoging.value = true
    http({
        method: 'post',
        url: '/login',
        data: {
            username: form.username,
            password: form.password
        }
    }).then(res => {
        isLoging.value = false
        user.changeRole(form.username)
        // console.log(form.username)
        // console.log(res.headers.get('auth'))
        const token = res.headers.get('auth')
        window.localStorage.setItem('token', token)
    }).catch(err => {
        isLoging.value = false
        console.log(err)
    })
}

const logout = () => {
    window.localStorage.removeItem('token')
}
</script>

<style lang="scss" scoped>
</style>