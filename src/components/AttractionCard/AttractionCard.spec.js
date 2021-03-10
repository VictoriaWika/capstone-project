import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AttractionCard from './AttractionCard'
import imageFile from './test.webp'

describe('AttractionCard', () => {
  it('renders name and an image', () => {
    render(
      <AttractionCard name="Alfama" image={imageFile} likedPlaces="[Alfama]" />
    )
    expect(screen.getByText('Alfama')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders a span element with role button', () => {
    render(
      <AttractionCard name="Alfama" image={imageFile} likedPlaces="[Alfama]" />
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls likePlace when clicking on the like button', () => {
    const callback = jest.fn()
    render(
      <AttractionCard
        name="Alfama"
        image={imageFile}
        likePlace={callback}
        likedPlaces="[Alfama]"
      />
    )
    const likeButton = screen.getByRole('button', { name: 'toggle-like' })
    userEvent.click(likeButton)
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
