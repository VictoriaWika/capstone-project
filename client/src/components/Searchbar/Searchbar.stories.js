import Searchbar from './Searchbar'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: Searchbar,
}

const DefaultSearchbar = args => <Searchbar {...args} />

export const PrimarySearchbar = DefaultSearchbar.bind({})

PrimarySearchbar.args = {
  setUserInput: action('onChange'),
  userInput: '',
}
