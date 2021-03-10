import Filter from './Filter'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: Filter,
}

const DefaultFilter = args => <Filter {...args} />

export const PrimaryFilter = DefaultFilter.bind({})

PrimaryFilter.args = {
  setUserInput: action('onChange'),
  userInput: '',
}
