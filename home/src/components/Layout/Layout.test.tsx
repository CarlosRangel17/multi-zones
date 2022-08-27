import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from '~components/Layout'

describe('Layout', () => {
  it('renders header', () => {
    render(<Layout />)
    screen.getByTestId(/header/i)
  })

  it('renders footer', () => {
    render(<Layout />)
    screen.getByTestId(/footer/i)
  })

  it('renders content', () => {
    render(
      <Layout description="test description" ogImage="test og image" title="test title" url="test url">
        <div>Test Content</div>
      </Layout>
    )
    screen.getByText(/Test Content/i)
  })
})
