import { describe, expect, it, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Counter from '../CounterComponent.vue'
import { useCounterStore } from '@/stores/counter'

function mountCounter(x = 0) {
  return mount(Counter, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            counter: { count: x }
          }
        })
      ]
    }
  })
}

describe('Counter', () => {
  it('renders properly', () => {
    const wrapper = mountCounter(50)
    expect(wrapper.text()).toContain('Counter: 50')
  })
  describe('Clicks', () => {
    it('increments counter', async () => {
      const wrapper = mountCounter(50)
      const counterStore = useCounterStore()
      await wrapper.find('button[id=increment]').trigger('click')
      expect(counterStore.increment).toHaveBeenCalledTimes(1)
    })
    it('decrements counter', async () => {
      const wrapper = mountCounter(50)
      const counterStore = useCounterStore()
      await wrapper.find('button[id=decrement]').trigger('click')
      expect(counterStore.decrement).toHaveBeenCalledTimes(1)
    })
  })
})
