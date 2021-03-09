import Filter from './Filter'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: Filter,
}

const onChange = action('onChange')
export const DefaultFilter = () => Filter(onChange)
