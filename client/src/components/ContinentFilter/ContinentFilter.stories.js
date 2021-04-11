import ContinentFilter from './ContinentFilter'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: ContinentFilter,
}

const DefaultContinentFilter = args => <ContinentFilter {...args} />

export const PrimaryContinentFilter = DefaultContinentFilter.bind({})

PrimaryContinentFilter.args = {
  filteredContinents: 'Africa',
  setFilteredContinents: action('onClick'),
}
