import { render } from '@redwoodjs/testing/web'

import HomePage from './HomePage'

describe.only('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
})
