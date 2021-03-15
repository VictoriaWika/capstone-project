import CreateForm from './CreateForm'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components',
  component: CreateForm,
}

const DefaultCreateForm = args => <CreateForm {...args} />

export const PrimaryCreateForm = DefaultCreateForm.bind({})

PrimaryCreateForm.args = {
  handleSubmit: action('onSubmit'),
  onCreateTrip: action('createTrip'),
}
