<template>
    <div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
        <div class="box"><img v-lazy="imgurl" alt=""></div>
    </div>
</template>

<script setup>
import imgurl from '@/assets/1.png'
</script>

<style lang="scss" scoped>
.box{
    min-height: 200px;
}
</style>