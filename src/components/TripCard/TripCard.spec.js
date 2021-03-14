import { render, screen } from '@testing-library/react'
import TripCard from './TripCard'

describe('TripCard', () => {
  it('renders the heading, the start and the end date', () => {
    render(
      <TripCard city="New York" startDate="2021-03-15" endDate="2021-03-24" />
    )
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('2021 03/15')).toBeInTheDocument()
    expect(screen.getByText('2021 03/24')).toBeInTheDocument()
  })
})
