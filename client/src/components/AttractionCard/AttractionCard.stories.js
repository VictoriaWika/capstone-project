import AttractionCard from './AttractionCard'
import imageFile from './test.webp'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: AttractionCard,
}

const DefaultCard = args => <AttractionCard {...args} />

export const PrimaryCard = DefaultCard.bind({})

PrimaryCard.args = {
  name: 'Table Mountain',
  location: 'Cape Town',
  continent: 'Africa',
  description: 'Cape Town’s Table Mountain National Park, which hugs the perimeter of ...',
  image: imageFile,
  likedPlaces: [],
  onLikePlace: action('onClick'),
}
