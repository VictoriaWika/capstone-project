import { useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'

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
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`
const Heading = styled.h2`
  margin-bottom: 0;
`
