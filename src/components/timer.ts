import { onMounted, onBeforeUnmount } from 'vue'

export function useInterval(callback: () => void, interval = undefined) {
  onMounted(() => {
    const timer = setInterval(callback, interval)
    onBeforeUnmount(() => { clearInterval(timer) })
  })
}
