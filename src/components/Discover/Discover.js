import { useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../AttractionCard/AttractionCard'
import Button from '../Button/Button'

export default function Discover({ AllSights, handleLikePlace, likedPlaces }) {
  const [randomSights, setRandom] = useState(sightRandomizer())
  return (
    <>
      <Heading>Discover</Heading>
      <Button onClick={() => setRandom(sightRandomizer())}>
        Show new sights
      </Button>
      {randomSights.map(item => (
        <AttractionCard
          key={item.name}
          name={item.name}
          image={item.image}
          onLike={handleLikePlace}
          likedPlaces={likedPlaces}
        >
          {item.name}
        </AttractionCard>
      ))}
    </>
  )
  function sightRandomizer() {
    const AllSightsRandom = AllSights.sort(() => 0.5 - Math.random())
    let randomSights = AllSightsRandom.slice(0, 5)
    return randomSights
  }
}

const Heading = styled.h2`
  margin-bottom: 0;
`
