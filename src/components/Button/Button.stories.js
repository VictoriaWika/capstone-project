import Button from './Button'

export default {
  title: 'Components',
  component: Button,
}

const DefaultButton = () => <Button>Create Trip</Button>

export const PrimaryButton = DefaultButton.bind({})

PrimaryButton.args = {}
