import { reactive } from 'vue'

export const storeCount = reactive({
  count: 0,
  increment() {
    this.count++
  }
})