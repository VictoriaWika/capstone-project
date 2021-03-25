import { useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../AttractionCard/AttractionCard'
import Button from '../Button/Button'
import Header from '../Header/Header'

export default function HomePage({
  handleAddLike,
  likedPlaces,
  onSightRandomizer,
}) {
  const [randomSights, setRandomSights] = useState(onSightRandomizer())
  return (
    <PageLayout>
      <Header title="Travelr" />
      <Heading>Discover</Heading>
      <Button onClick={() => setRandomSights(onSightRandomizer())}>
        Show new sights
      </Button>
      {randomSights.map(item => (
        <AttractionCard
          key={item.name}
          name={item.name}
          image={item.image}
          onAddLike={handleAddLike}
          likedPlaces={likedPlaces}
        >
          {item.name}
        </AttractionCard>
      ))}
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`
const Heading = styled.h2`
  margin-bottom: 0;
`