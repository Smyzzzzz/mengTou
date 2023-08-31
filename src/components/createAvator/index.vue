<script lang="ts" setup>
import { ref, toRefs, watchEffect } from 'vue'
import type { AvatarOption } from '../../types'
import { WrapperShape } from '../../enums'
import { getRandomAvatarOption } from '@/utils'
import Background from '../widgets/Background.vue'
// 给defineProps绑定默认api
// 赋默认值
interface VueColorAvatarProps {
  option: AvatarOption
  size?: number
}
const props = withDefaults(defineProps<VueColorAvatarProps>(), {
  option: () => getRandomAvatarOption(),
  size: 280,
})
const { option: avatarOption, size: avatarSize } = toRefs(props)

// const avatarOption =ref({})

function getWrapperShapeClassName() {
  return {
    [WrapperShape.Circle]:
      avatarOption.value.wrapperShape === WrapperShape.Circle,
    [WrapperShape.Square]:
      avatarOption.value.wrapperShape === WrapperShape.Square,
    [WrapperShape.Squircle]:
      avatarOption.value.wrapperShape === WrapperShape.Squircle,
  }
}
</script>

<template>
  <!-- :style="{
    width: `${avatarSize}px`,
    height: `${avatarSize}px`,
  }" -->
  <div ref="avatarRef" class="vue-color-avatar" style="width: 280px;
  height: 280px;" :class="getWrapperShapeClassName()">
    <Background :color="avatarOption.background.color" />
    <!-- png -->
    <div class="avatar-payload"></div>
    <!--  -->
    <!-- 解析文件用的 -->
    <!-- <div class="avatar-payload" v-html="svgContent" /> -->
  </div>
</template>

<style scoped lang="less">
.vue-color-avatar {
  position: relative;
  overflow: hidden;

  &.circle {
    border-radius: 50%;
  }

  &.squircle {
    // TODO: Radius should adapt to the avatar size
    border-radius: 25px;
  }

  .avatar-payload {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
}
</style>
