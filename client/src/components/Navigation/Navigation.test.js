import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('checks if active Link has class active', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <Navigation />
      </MemoryRouter>
    )
    expect(screen.getByText('Search')).toHaveClass('active')
  })
})
