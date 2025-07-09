import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import GStatus from '../GStatus.vue'

describe('Github Status', () => {
  it('renders properly', () => {
    const wrapper = mount(GStatus)
    expect(wrapper.text()).toContain('Github Status')
  })
})
