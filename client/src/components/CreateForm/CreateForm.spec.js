import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreateForm from './CreateForm'
import { MemoryRouter } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
jest.mock('uuid')

describe('CreateForm', () => {
  it('renders a form with four inputs and a button', () => {
    render(
      <MemoryRouter>
        <CreateForm />
      </MemoryRouter>
    )
    expect(screen.getByLabelText('Continent')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
    expect(screen.getByLabelText('Start date')).toBeInTheDocument()
    expect(screen.getByLabelText('End date')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('renders four required input fields', () => {
    render(
      <MemoryRouter>
        <CreateForm />
      </MemoryRouter>
    )
    expect(screen.getByLabelText('Continent')).toBeRequired()
    expect(screen.getByLabelText('Location')).toBeRequired()
    expect(screen.getByLabelText('Start date')).toBeRequired()
    expect(screen.getByLabelText('End date')).toBeRequired()
  })

  it('selects the right option', () => {
    const callback = jest.fn()
    render(
      <MemoryRouter>
        <CreateForm onCreateTrip={callback} />
      </MemoryRouter>
    )
    userEvent.selectOptions(screen.getByTestId('select'), ['Asia'])
    expect(screen.getByTestId('Asia').selected).toBe(true)
  })

  it('calls onCreateTrip with form data', () => {
    const callback = jest.fn()
    render(
      <MemoryRouter>
        <CreateForm onCreateTrip={callback} />
      </MemoryRouter>
    )
    uuidv4.mockImplementation(() => 'testid')
    userEvent.type(screen.getByLabelText('Continent'), 'Africa')
    userEvent.type(screen.getByLabelText('Location'), 'Cape Town')
    userEvent.type(screen.getByLabelText('Start date'), '2021-03-25')
    userEvent.type(screen.getByLabelText('End date'), '2021-03-30')
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith({
      continent: '',
      location: '',
      id: 'testid',
      sights: [],
      startDate: '2021-03-25',
      endDate: '2021-03-30',
    })
  })
})
