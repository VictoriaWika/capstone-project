import AttractionCard from './AttractionCard'
import imageFile from './test.jpg'

export default {
  title: 'Components',
  component: AttractionCard,
}

export const Card = () => <AttractionCard name="Alfama" image={imageFile} />
