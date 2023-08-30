import { computed } from 'vue'

import { useStore } from '@/stores'
import { SET_AVATAR_OPTION } from '@/stores/mutation-type'
import type { AvatarOption } from '@/types'

export default function useAvatarOption() {
  const store = useStore()
  // 改状态
  const avatarOption = computed(() => store.history.present)

  const setAvatarOption = (newOption: AvatarOption) => {
    store[SET_AVATAR_OPTION](newOption)
  }

  return [avatarOption, setAvatarOption] as const
}
