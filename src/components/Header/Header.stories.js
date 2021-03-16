import Header from './Header'

export default {
  title: 'Components',
  component: Header,
}

const DefaultHeader = args => <Header {...args} />

export const PrimaryHeader = DefaultHeader.bind({})

PrimaryHeader.args = {
  title: 'Travelr',
}
