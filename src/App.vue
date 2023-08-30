<script lang="ts" setup>
import Navbar from '../src/components/navbar/index.vue'
</script>

<template>
  <div class="main11">


    <Navbar></Navbar>
    <router-view></router-view>

    <div></div>
  </div>
</template>

<style scoped lang="less">
.main11 {
  min-height: 100vh;
  background-color: black;
}
</style>

