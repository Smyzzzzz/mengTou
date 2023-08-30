import { computed } from 'vue'

import { useStore } from '@/stores'
import { SET_SIDER_STATUS } from '@/stores/mutation-type'

export default function useSider() {
  const store = useStore()

  const isCollapsed = computed(() => store.isSiderCollapsed)

  const openSider = () => {
    store[SET_SIDER_STATUS](false)
  }

  const closeSider = () => {
    store[SET_SIDER_STATUS](true)
  }

  return { isCollapsed, openSider, closeSider }
}
