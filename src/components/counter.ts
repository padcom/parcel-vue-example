import { ref } from 'vue'

export function useCounter() {
  const value = ref(0)
  const increment = () => value.value++
  const decrement = () => value.value--

  return { value, increment, decrement }
}
