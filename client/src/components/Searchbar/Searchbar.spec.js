import { render, screen } from '@testing-library/react'
import Searchbar from './Searchbar'

describe('Searchbar', () => {
  it('renders a form with label and input', () => {
    render(<Searchbar />)
    expect(screen.getByLabelText('Sightseeing attraction:')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Times Square')).toBeInTheDocument()
  })
})
