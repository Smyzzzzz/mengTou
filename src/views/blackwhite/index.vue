<script lang="ts" setup>
import createAvator from '@/components/createAvator/index.vue'
import Sider from '@/views/layouts/Sider.vue'

import Configurator from '../../components/sidercontent/index.vue'
// import type { AvatarOption } from './types'
import { useAvatarOption } from '@/hooks'

// 历史记录
const [avatarOption,
  //  setAvatarOption
] = useAvatarOption()
</script>

<template>
  <div>blackwhite</div>
  <div class="touxiang">
    <createAvator :size="280" :option="avatarOption" />

  </div>
  <!-- 我是侧边栏，侧边栏 -->
  <Sider>

    <Configurator />
  </Sider>
</template>

<style scoped lang="less">
.touxiang {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

