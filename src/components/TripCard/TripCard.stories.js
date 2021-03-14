import TripCard from './TripCard'

export default {
  title: 'Components',
  component: TripCard,
}

const DefaultTripCard = args => <TripCard {...args} />

export const PrimaryTripCard = DefaultTripCard.bind({})

PrimaryTripCard.args = {
  city: 'Lisbon',
  startDate: '2021-03-10',
  endDate: '2021-03-22',
}
