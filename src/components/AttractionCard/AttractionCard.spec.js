import { render, screen } from '@testing-library/react'
import AttractionCard from './AttractionCard'
import imageFile from './Alfama.jpg'

describe('AttractionCard', () => {
  it('renders name and an image', () => {
    render(<AttractionCard name="Alfama" image={imageFile} />)
    expect(screen.getByText('Alfama')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
