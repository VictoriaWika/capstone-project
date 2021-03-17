import Discover from './Discover'

export default {
  title: 'Components',
  component: Discover,
}

const DefaultCard = args => <Discover {...args} />

export const PrimaryCard = DefaultCard.bind({})

PrimaryCard.args = {}
