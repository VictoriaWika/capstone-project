import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreateForm from './CreateForm'

describe('CreateForm', () => {
  it('renders a form with three inputs and a button', () => {
    render(<CreateForm />)
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
    expect(screen.getByLabelText('Start date')).toBeInTheDocument()
    expect(screen.getByLabelText('End date')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('renders three required input fields', () => {
    render(<CreateForm />)
    expect(screen.getByLabelText('Location')).toBeRequired()
    expect(screen.getByLabelText('Start date')).toBeRequired()
    expect(screen.getByLabelText('End date')).toBeRequired()
  })

  it('selects the right option', () => {
    const callback = jest.fn()
    render(<CreateForm onCreateTrip={callback} />)
    userEvent.selectOptions(screen.getByTestId('select'), ['New York'])
    expect(screen.getByTestId('New York').selected).toBe(true)
  })

  it('calls onCreateTrip with form data', () => {
    const callback = jest.fn()
    render(<CreateForm onCreateTrip={callback} />)
    userEvent.type(screen.getByLabelText('Location'), 'Lisbon')
    userEvent.type(screen.getByLabelText('Start date'), '2021-03-25')
    userEvent.type(screen.getByLabelText('End date'), '2021-03-30')
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith({
      location: '',
      id: 'random number',
      startDate: '2021-03-25',
      endDate: '2021-03-30',
    })
  })
})
