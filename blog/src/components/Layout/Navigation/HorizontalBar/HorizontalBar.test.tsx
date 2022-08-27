import React from 'react'
import { render, screen } from '@testing-library/react'
import HorizontalBar from './index'
import VerticalBar from '../VerticalBar'

describe('Navigation Component', () => {
  it('render the horizontal bar appropriately', () => {
    const { rerender } = render(<HorizontalBar />)
    screen.getByTestId(/horizontal-bar/i)
    expect(screen.queryByTestId(/body-content/i)).not.toBeInTheDocument()

    rerender(<HorizontalBar bodyContent={<div data-testid="body-content">Test content</div>} />)
    screen.getByTestId(/body-content/i)
  })

  it('render the vertical bar appropriately', () => {
    const { rerender } = render(<VerticalBar />)
    screen.getByTestId(/vertical-bar/i)
    expect(screen.queryByTestId(/body-content/i)).not.toBeInTheDocument()

    rerender(<VerticalBar bodyContent={<div data-testid="body-content">Test content</div>} />)
    screen.getByTestId(/body-content/i)
  })
})
