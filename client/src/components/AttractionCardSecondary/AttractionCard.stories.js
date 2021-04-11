import AttractionCard from './AttractionCard'
import imageFile from './test.webp'

export default {
  title: 'Components',
  component: AttractionCard,
}

const DefaultCard = args => <AttractionCard {...args} />

export const SecondaryCard = DefaultCard.bind({})

SecondaryCard.args = {
  name: 'Table Mountain',
  location: 'Cape Town',
  continent: 'Africa',
  description: 'Cape Town’s Table Mountain National Park, which hugs the perimeter of ...',
  image: imageFile,
}
