<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import createAvator, { type VueColorAvatarRef } from '@/components/createAvator/index.vue'
import Sider from '@/views/layouts/Sider.vue'

import Configurator from '../../components/sidercontent/index.vue'
// import type { AvatarOption } from './types'
import { useAvatarOption } from '@/hooks'


////////////////////////////////////////
import ActionBar from '@/components/actionBar/index.vue'

import { useStore } from '@/stores'
import { REDO, UNDO } from '@/stores/mutation-type'

import { ActionType } from '@/enums'
import type { AvatarOption } from '../../types'


import { recordEvent } from '@/utils/ga'
import {
  getRandomAvatarOption,
  getSpecialAvatarOption,
  showConfetti,
} from '@/utils'
import {
  DOWNLOAD_DELAY,
  NOT_COMPATIBLE_AGENTS,
  TRIGGER_PROBABILITY,
} from '@/utils/constant'


import { useI18n } from 'vue-i18n'
// 下载方法和需要引入的东西
import { name as appName } from '../../../package.json'
import DownloadModal from '@/components/Modal/DownloadModal.vue'
import ConfettiCanvas from '@/components/ConfettiCanvas.vue'
// 历史记录
const store = useStore()

const [avatarOption, setAvatarOption] = useAvatarOption()


// ///////////////////////////////////////
const { t } = useI18n()

const colorAvatarRef = ref<VueColorAvatarRef>()

function handleGenerate() {
  if (Math.random() <= TRIGGER_PROBABILITY) {
    let colorfulOption = getSpecialAvatarOption()
    while (
      JSON.stringify(colorfulOption) === JSON.stringify(avatarOption.value)
    ) {
      colorfulOption = getSpecialAvatarOption()
    }
    colorfulOption.wrapperShape = avatarOption.value.wrapperShape
    setAvatarOption(colorfulOption)
    showConfetti()
  } else {
    const randomOption = getRandomAvatarOption(avatarOption.value)
    setAvatarOption(randomOption)
  }

  recordEvent('click_randomize', {
    event_category: 'click',
  })
}

// 下载方法模块
const downloadModalVisible = ref(false)
const downloading = ref(false)
const imageDataURL = ref('')

async function handleDownload() {
  try {
    downloading.value = true
    console.log(1111)
    const avatarEle = colorAvatarRef.value?.avatarRef
    console.log(avatarEle)
    const userAgent = window.navigator.userAgent.toLowerCase()

    const notCompatible = NOT_COMPATIBLE_AGENTS.some(
      (agent) => userAgent.indexOf(agent) !== -1
    )

    if (avatarEle) {
      // debugger
      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(avatarEle, {
        backgroundColor: null,
      })
      const dataURL = canvas.toDataURL()

      if (notCompatible) {
        imageDataURL.value = dataURL
        downloadModalVisible.value = true
      } else {
        const trigger = document.createElement('a')
        trigger.href = dataURL
        trigger.download = `${appName}.png`
        trigger.click()
      }
    }

    recordEvent('click_download', {
      event_category: 'click',
    })
  } finally {
    setTimeout(() => {
      downloading.value = false
    }, DOWNLOAD_DELAY)
  }
}

const flipped = ref(false)
const codeVisible = ref(false)

function handleAction(actionType: ActionType) {
  switch (actionType) {
    case ActionType.Undo:
      store[UNDO]()
      recordEvent('action_undo', {
        event_category: 'action',
        event_label: 'Undo',
      })
      break

    case ActionType.Redo:
      store[REDO]()
      recordEvent('action_redo', {
        event_category: 'action',
        event_label: 'Redo',
      })
      break

    case ActionType.Flip:
      flipped.value = !flipped.value
      recordEvent('action_flip_avatar', {
        event_category: 'action',
        event_label: 'Flip Avatar',
      })
      break

    case ActionType.Code:
      codeVisible.value = !codeVisible.value
      recordEvent('action_view_code', {
        event_category: 'action',
        event_label: 'View Avatar Option Code',
      })
      break
  }
}

const avatarListVisible = ref(false)
const avatarList = ref<AvatarOption[]>([])

watchEffect(() => {
  avatarListVisible.value =
    Array.isArray(avatarList.value) && avatarList.value.length > 0
})

async function generateMultiple(count = 5 * 6) {
  const { default: hash } = await import('object-hash')

  const avatarMap = [...Array(count)].reduce<Map<string, AvatarOption>>(
    (res) => {
      let randomAvatarOption: AvatarOption
      let hashKey: string

      do {
        randomAvatarOption = getRandomAvatarOption(avatarOption.value)
        hashKey = hash.sha1(randomAvatarOption)
      } while (
        randomAvatarOption.background.color === 'transparent' ||
        res.has(hashKey)
      )

      res.set(hashKey, randomAvatarOption)

      return res
    },
    new Map()
  )

  avatarList.value = Array.from(avatarMap.values())

  recordEvent('click_generate_multiple', {
    event_category: 'click',
  })
}
</script>

<template>
  <div>
    <div>
      <div class="touxiang">
        <createAvator ref="colorAvatarRef" :size="280" :option="avatarOption" :style="{
          transform: `rotateY(${flipped ? -180 : 0}deg)`,
        }" />

      </div>
      <div style="width: 100%;display: flex;justify-content: center;align-items: center;">
        <ActionBar @action="handleAction" />
      </div>

      <!-- 下方四个按钮 -->
      <div class="action-group">
        <div style="width: 280px;display: flex;justify-content: space-between;">
          <button class="button" @click="handleGenerate">
            {{ t('action.randomize') }}
          </button>

          <button class="button" :disabled="downloading" @click="handleDownload">
            {{
              downloading
              ? `${t('action.downloading')}...`
              : t('action.download')
            }}
          </button>
        </div>
        <!-- <button type="button" class="action-btn action-multiple" @click="() => generateMultiple()">
          {{ t('action.downloadMultiple') }}
        </button> -->
      </div>
    </div>
    <!-- 下载 -->
    <DownloadModal :visible="downloadModalVisible" :image-url="imageDataURL"
      @close="; (downloadModalVisible = false), (imageDataURL = '')" />

  </div>

  <!-- <ConfettiCanvas /> -->
  <div class="gradient-bg">
    <div class="gradient-top"></div>
    <div class="gradient-bottom"></div>
  </div>

  <!-- 我是侧边栏，侧边栏 -->
  <Sider>

    <Configurator />
  </Sider>
</template>

<style scoped lang="scss">
@use 'src/styles/var';

.touxiang {
  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-group {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  // width: 280px;
  .button {
    height: 50px;
    width: 120px;
    background-color: #dac4f4;
    border: none;
    border-radius: 20px;
    //#666
    color: hsl(210, 5%, 64%);
    font-weight: 600;
    font-size: 18px;
  }
}
</style>

