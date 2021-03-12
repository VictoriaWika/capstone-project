import { render, screen } from '@testing-library/react'
import Filter from './Filter'

describe('Filter', () => {
  it('renders a form with label and input', () => {
    render(<Filter />)
    expect(screen.getByLabelText('Sightseeing attraction:')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Times Square')).toBeInTheDocument()
  })
})
