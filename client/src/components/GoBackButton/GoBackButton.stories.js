import GoBackButton from './GoBackButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: GoBackButton,
}

const DefaultGoBackButton = args => <GoBackButton {...args} />

export const PrimaryGoBackButton = DefaultGoBackButton.bind({})

PrimaryGoBackButton.args = {
  handleClick: action('onClick'),
}
