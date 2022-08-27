import React from 'react'
import { render, screen } from '@testing-library/react'
import VerticalBar from '.'

describe('Vertical Bar Component', () => {
  it('render the vertical bar appropriately', () => {
    const { rerender } = render(<VerticalBar />)
    screen.getByTestId(/vertical-bar/i)
    expect(screen.queryByTestId(/body-content/i)).not.toBeInTheDocument()

    rerender(<VerticalBar bodyContent={<div data-testid="body-content">Test content</div>} />)
    screen.getByTestId(/body-content/i)
  })
})
