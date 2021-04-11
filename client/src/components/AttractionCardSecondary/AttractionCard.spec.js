import { render, screen } from '@testing-library/react'
import AttractionCard from './AttractionCard'
import imageFile from './test.webp'

describe('AttractionCard', () => {
  it('renders name, location, continent and an image', () => {
    render(
      <AttractionCard
        name="Table Mountain"
        image={imageFile}
        location="Cape Town"
        continent="Africa"
      />
    )
    expect(screen.getByText('Table Mountain')).toBeInTheDocument()
    expect(screen.getByText(/Cape Town/)).toBeInTheDocument()
    expect(screen.getByText(/Africa/)).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
