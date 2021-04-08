import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AttractionCard from './AttractionCard'
import imageFile from './test.webp'

const likedPlaces = [
  {
    _id: '60606967f279720b8dc50460',
    name: 'Table Mountain',
    description:
      'Cape Town’s Table Mountain National Park, which hugs the perimeter of ...',
    image:
      'https://afar-production.imgix.net/uploads/images/post_images/images/fy...',
    location: 'Cape Town',
    continent: 'Africa',
  },
  {
    _id: '60606967f279720b8dc50461',
    name: 'Kirstenbosch National Botanical Garden',
    description:
      'Founded in 1913, this famous botanical garden was the first in the wor...',
    image:
      'https://afar-production.imgix.net/uploads/images/post_images/images/XU...',
    location: 'Cape Town',
    continent: 'Africa',
  },
]

describe('AttractionCard', () => {
  it('renders name, location, continent and an image', () => {
    render(
      <AttractionCard
        name="Table Mountain"
        image={imageFile}
        likedPlaces={likedPlaces}
        location="Cape Town"
        continent="Africa"
      />
    )
    expect(screen.getByText('Table Mountain')).toBeInTheDocument()
    expect(screen.getByText(/Cape Town/)).toBeInTheDocument()
    expect(screen.getByText(/Africa/)).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders a span element with role button', () => {
    render(
      <AttractionCard
        name="Table Mountain"
        image={imageFile}
        likedPlaces={likedPlaces}
        location="Cape Town"
        continent="Africa"
      />
    )
    expect(
      screen.getByRole('button', { name: 'toggle-like' })
    ).toBeInTheDocument()
  })

  it('calls onLikePlace when clicking on the like button', () => {
    const callback = jest.fn()
    render(
      <AttractionCard
        name="Table Mountain"
        image={imageFile}
        onAddLike={callback}
        likedPlaces={likedPlaces}
        location="Cape Town"
        continent="Africa"
      />
    )
    const likeButton = screen.getByRole('button', { name: 'toggle-like' })
    userEvent.click(likeButton)
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('renders a button with text show more', () => {
    render(
      <AttractionCard
        name="Table Mountain"
        image={imageFile}
        likedPlaces={likedPlaces}
        location="Cape Town"
        continent="Africa"
      />
    )
    expect(
      screen.getByRole('button', { name: 'toggle-details' })
    ).toBeInTheDocument()
  })
})
