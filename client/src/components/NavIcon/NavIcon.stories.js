import NavIcon from './NavIcon'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: NavIcon,
}

const DefaultNavIcon = args => <NavIcon {...args} />

export const PrimaryNavIcon = DefaultNavIcon.bind({})

PrimaryNavIcon.args = {
  setOpen: action('onClick'),
  open: 'open',
}
