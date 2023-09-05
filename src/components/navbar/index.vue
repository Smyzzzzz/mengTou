<script  lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
let isCollapsed = ref(true)
const router = useRouter()
const route = useRoute()
const goNext = () => {
  router.push('/blackwhite')
}
</script>

<template>
  <div class="big-panel">
    <!--  -->
    <div class="panel" v-if="!isCollapsed">
      <!-- <div></div> -->
      <div class="go" @click="goNext" :class="{ isActive: $route.path == '/blackwhite' }">头 像 DIY</div>
      <div class="go" @click="$router.push('/cute')" :class="{ isActive: $route.path == '/cute' }"> PNG 头 像</div>
      <div class="go" @click="$router.push('/waterfall')" :class="{ isActive: $route.path == '/waterfall' }">广 场</div>
    </div>
    <div class="trigger" @click="isCollapsed = !isCollapsed">
      <img src="../../assets/icons/Left pink.png" style="width: 48px;
  height: 48px;" :class="{ iconRight: isCollapsed }">
    </div>
  </div>
</template>

<style scoped lang="less">
.big-panel {
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 0;
  display: flex;
  align-items: center;

  .trigger {
    position: relative;
    cursor: pointer;
    top: 40%;
    right: 20px;
    // left: 0px;

    .iconRight {
      transform: translateX(100%);
      transform: rotateY(-180deg);
      transition: transform 0.2s;

    }


  }

  .panel {
    // height: 300px;
    width: 120px;

    background-color: #fff;
    border-radius: 0 20px 20px 0;
    border: 1px solid black;


    .go {
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 600;
      color: #333333;
      border-bottom: 1px solid black;


    }

    .go:first-child {
      border-radius: 0 20px 0 0;
    }

    .go:last-child {
      border-radius: 0 0 20px 0;
      border-bottom: none;
    }

    .isActive {
      background-color: #5955af;
      color: #fff;
    }

  }
}
</style>
