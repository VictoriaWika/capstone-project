import Input from './Input'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: Input,
}

const DefaultInput = args => <Input {...args} />

export const PrimaryInput = DefaultInput.bind({})

PrimaryInput.args = {
  setUserInput: action('onChange'),
  userInput: '',
}
