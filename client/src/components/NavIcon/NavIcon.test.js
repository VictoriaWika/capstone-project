import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavIcon from './NavIcon'

describe('NavIcon', () => {
  it('checks if active Link has class active', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <NavIcon />
      </MemoryRouter>
    )
    expect(screen.getByText('Search')).toHaveClass('active')
  })
})
