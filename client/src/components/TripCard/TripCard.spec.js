import { render, screen } from '@testing-library/react'
import TripCard from './TripCard'
import { MemoryRouter } from 'react-router-dom'

describe('TripCard', () => {
  it('renders location, continent, start and end date and show more button', () => {
    render(
      <TripCard
        continent="Africa"
        location="Cape Town"
        startDate="2021-03-15"
        endDate="2021-03-24"
      />,
      { wrapper: MemoryRouter }
    )
    expect(screen.getByText('Africa')).toBeInTheDocument()
    expect(screen.getByText('Cape Town')).toBeInTheDocument()
    expect(screen.getByText('2021-03-15')).toBeInTheDocument()
    expect(screen.getByText('2021-03-24')).toBeInTheDocument()
    expect(screen.getByText('Show more')).toBeInTheDocument()
  })
})
