import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from './index'

describe('Navigation Component', () => {
  it('render the navigation bar appropriately', () => {
    render(<Navigation />)
    screen.getByTestId(/horizontal-bar/i)
    screen.getByTestId(/vertical-bar/i)
  })
})
