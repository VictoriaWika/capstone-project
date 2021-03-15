import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreateForm from './CreateForm'

describe('CreateForm', () => {
  it('renders a form with three inputs and a button', () => {
    render(<CreateForm />)
    expect(screen.getByLabelText('City')).toBeInTheDocument()
    expect(screen.getByLabelText('Start date')).toBeInTheDocument()
    expect(screen.getByLabelText('End date')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('renders three required input fields', () => {
    render(<CreateForm />)
    expect(screen.getByLabelText('City')).toBeRequired()
    expect(screen.getByLabelText('Start date')).toBeRequired()
    expect(screen.getByLabelText('End date')).toBeRequired()
  })

  it('selects the right option', () => {
    const callback = jest.fn()
    render(<CreateForm onSubmit={callback} onCreateTrip={callback} />)
    userEvent.selectOptions(screen.getByTestId('select'), ['New York'])
    expect(screen.getByTestId('New York').selected).toBe(true)
  })

  it('calls onSubmit with form data', () => {
    const callback = jest.fn()
    render(<CreateForm onSubmit={callback} onCreateTrip={callback} />)
    userEvent.type(screen.getByLabelText('City'), 'Lisbon')
    userEvent.type(screen.getByLabelText('Start date'), '2021-03-25')
    userEvent.type(screen.getByLabelText('End date'), '2021-03-30')
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith({
      city: '',
      startDate: '2021-03-25',
      endDate: '2021-03-30',
    })
  })
})
