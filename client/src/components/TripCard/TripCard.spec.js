import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TripCard from './TripCard'
import { MemoryRouter } from 'react-router-dom'

const sights = [
  {
    _id: '60606967f279720b8dc50460',
    name: 'Table Mountain',
    description:
      'Cape Town’s Table Mountain National Park, which hugs the perimeter of ...',
    image: 'https://testURL',
    location: 'Cape Town',
    continent: 'Africa',
  },
  {
    _id: '60606967f279720b8dc50461',
    name: 'Kirstenbosch National Botanical Garden',
    description:
      'Founded in 1913, this famous botanical garden was the first in the wor...',
    image: 'https://testURL',
    location: 'Cape Town',
    continent: 'Africa',
  },
]

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

  it('calls onDeleteTrip when clicked', () => {
    const callback = jest.fn()
    render(
      <TripCard
        continent="Africa"
        location="Cape Town"
        startDate="2021-03-15"
        endDate="2021-03-24"
        deleteTrip={callback}
        sights={sights}
      />,
      { wrapper: MemoryRouter }
    )
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
