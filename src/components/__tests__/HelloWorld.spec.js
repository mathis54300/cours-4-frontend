import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('contains app name', () => {
    // mock the env variable
    import.meta.env.VITE_APP_NAME = 'Vitest Test App'

    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain(import.meta.env.VITE_APP_NAME)
  })
})
