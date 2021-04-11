import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders links to four pages Home, Like, Search and Trip', () => {
    render(<Navigation />, { wrapper: MemoryRouter })
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Like')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(screen.getByText('Trip')).toBeInTheDocument()
  })

  it('checks if active Link has class active', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <Navigation />
      </MemoryRouter>
    )
    expect(screen.getByText('Search')).toHaveClass('active')
  })
})
