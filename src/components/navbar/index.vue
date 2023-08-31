<script  lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const goNext = () => {
  router.push('/blackwhite')
}
</script>

<template>
  <div class="panel">
    <!-- <div></div> -->
    <div class="go" @click="goNext">黑白</div>
    <div class="go" @click="$router.push('/cute')">可爱</div>
    <div class="go" @click="$router.push('/waterfall')">广场</div>
  </div>
</template>

<style scoped lang="less">
.panel {
  height: 300px;
  width: 100px;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 0;
  background-color: blanchedalmond;
  border-radius: 0 20px 20px 0;
  border: 1px solid black;

  .go {
    height: 100px;
    border-bottom: 1px solid black;
  }

  .go:last-child {
    border-bottom: none;
  }
}
</style>
