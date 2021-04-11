import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import TripNavigation from './TripNavigation'

describe('Navigation', () => {
  it('renders links to Plan Trip and Your Trips', () => {
    render(<TripNavigation />, { wrapper: MemoryRouter })
    expect(screen.getByText('Plan Trip')).toBeInTheDocument()
    expect(screen.getByText('Your Trips')).toBeInTheDocument()
  })

  it('checks if active Link has class active', () => {
    render(
      <MemoryRouter initialEntries={['/trips']}>
        <TripNavigation />
      </MemoryRouter>
    )
    expect(screen.getByText('Your Trips')).toHaveClass('active')
  })
})
