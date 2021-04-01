import { render, screen } from '@testing-library/react'
import Searchbar from './Searchbar'

describe('Searchbar', () => {
  it('renders a form with input', () => {
    render(<Searchbar text="Wanderlust" />)
    expect(screen.getByPlaceholderText('Wanderlust')).toBeInTheDocument()
  })
})
