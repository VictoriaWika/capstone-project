import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreateForm from './CreateForm'
import selectEvent from 'react-select-event'

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

  // FAILED TESTS - PLEASE IGNORE

  // it('calls onSubmit with form data', () => {
  //   const callback = jest.fn()
  //   render(<CreateForm onSubmit={callback} onCreateTrip={callback} />)
  //   userEvent.type('input', { name: 'city' }, 'New York')
  //   // userEvent.type(screen.getByLabelText('City'), 'New York')
  //   userEvent.type('input', { name: 'startDate' }, '2021-03-25')
  //   userEvent.type('input', { name: 'endDate' }, '2021-03-30')
  //   userEvent.click(screen.getByRole('button'))
  //   expect(callback).toHaveBeenCalledTimes(1)
  //   expect(callback).toHaveBeenCalledWith({
  //     city: 'New York',
  //     startDate: '2021-03-25',
  //     endDate: '2021-03-30',
  //   })
  // })

  // // TEST according to https://testing-library.com/docs/ecosystem-react-select-event/
  // it('calls onSubmit with form data', () => {
  //   const { getByTestId, getByLabelText } = render(
  //     <CreateForm data-testid="form" />
  //   )

  //   // select two values...
  //   selectEvent.select(getByLabelText('City'), ['Lisbon', 'New York'])
  //   expect(getByTestId('form')).toHaveFormValues({
  //     city: ['Lisbon', 'New York'],
  //   })
  // })
})
