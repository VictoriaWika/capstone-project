import Navigation from './Navigation'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: Navigation,
}

const DefaultNavigation = args => <Navigation {...args} />

export const PrimaryNavigation = DefaultNavigation.bind({})

PrimaryNavigation.args = {
  setOpen: action('onClick'),
  open: 'open',
}