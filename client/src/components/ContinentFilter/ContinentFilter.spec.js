import { render, screen } from '@testing-library/react'
import ContinentFilter from './ContinentFilter'

describe('ContinentFilter', () => {
  it('renders 6 SVGs and a button', () => {
    render(
      <ContinentFilter

      />
    )
    expect(screen.getByText(/africa/)).toBeInTheDocument()
    expect(screen.getByText(/asia/)).toBeInTheDocument()
    expect(screen.getByText(/europe/)).toBeInTheDocument()
    expect(screen.getByText(/north-america/)).toBeInTheDocument()
    expect(screen.getByText(/oceania/)).toBeInTheDocument()
    expect(screen.getByText(/south-america/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'reset-filter' })).toBeInTheDocument()
  })
})