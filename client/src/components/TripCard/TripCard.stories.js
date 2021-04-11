import TripCard from './TripCard'
import { action } from '@storybook/addon-actions'
import imageFile from './test.webp'

export default {
  title: 'Components',
  component: TripCard,
}

const DefaultTripCard = args => <TripCard {...args} />

export const PrimaryTripCard = DefaultTripCard.bind({})

PrimaryTripCard.args = {
  location: 'Cape Town',
  continent: 'Africa',
  startDate: '2021-03-10',
  endDate: '2021-03-22',
  onDeleteTrip: action('onClick'),
  sights: [
    {
      _id: '60606967f279720b8dc50460',
      name: 'Table Mountain',
      image: imageFile,
    }
  ]
}
