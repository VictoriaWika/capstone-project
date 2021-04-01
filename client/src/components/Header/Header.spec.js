import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('renders a header with an image', () => {
    render(<Header />, { wrapper: MemoryRouter })
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
