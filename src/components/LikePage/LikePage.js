import styled from 'styled-components'
import AttractionCard from '../AttractionCard/AttractionCard'

export default function LikePage({ allSights, likedPlaces, onLikePlace }) {
  const filteredPlaces = allSights.filter(sights =>
    likedPlaces.includes(sights.name)
  )
  return (
    <PageLayout>
      <Heading>Your liked Places</Heading>
      {likedPlaces.length === 0 && <p>You haven't liked anything yet!</p>}
      {filteredPlaces.map(filteredSights => (
        <AttractionCard
          key={filteredSights.name}
          name={filteredSights.name}
          image={filteredSights.image}
          LikePlace={onLikePlace}
          likedPlaces={likedPlaces}
        />
      ))}
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: grid;
  gap: 10px;
`
const Heading = styled.h2`
  margin-bottom: 0;
`
