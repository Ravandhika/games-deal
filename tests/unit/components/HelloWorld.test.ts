import { render, screen } from '@testing-library/vue'

import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('display project name', () => {
    render(HelloWorld)
    const projectName = screen.getByText('boilerplate')
    expect(projectName).toBeInTheDocument()
  })
})
