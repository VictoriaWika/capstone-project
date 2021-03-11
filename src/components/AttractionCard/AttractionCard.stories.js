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
  name: 'Alfama',
  image: imageFile,
  likedPlaces: 'unliked',
  onLike: action('onClick'),
}
