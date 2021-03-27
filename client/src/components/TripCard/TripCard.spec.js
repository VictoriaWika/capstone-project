import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TripCard from './TripCard'

describe('TripCard', () => {
  it('renders the heading, the start and the end date and the delete button', () => {
    render(
      <TripCard city="New York" startDate="2021-03-15" endDate="2021-03-24" />
    )
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('2021 03/15')).toBeInTheDocument()
    expect(screen.getByText('2021 03/24')).toBeInTheDocument()
    expect(screen.getByText(/Delete/)).toBeInTheDocument()
  })

  it('calls onDeleteTrip when clicked', () => {
    const callback = jest.fn()
    render(
      <TripCard
        city="New York"
        startDate="2021-03-15"
        endDate="2021-03-24"
        onDeleteTrip={callback}
      />
    )
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
