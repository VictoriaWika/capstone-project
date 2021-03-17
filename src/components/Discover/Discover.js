import { useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../AttractionCard/AttractionCard'
import Button from '../Button/Button'

export default function Discover({ AllSights, handleLikePlace, likedPlaces }) {
  const [random, setRandom] = useState(sightRandomizer())
  return (
    <>
      <Heading>Discover</Heading>
      <Button onClick={() => setRandom(sightRandomizer())}>
        Show new sights
      </Button>
      {random.map(item => (
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
    const randomSights = AllSights.sort(() => 0.5 - Math.random())
    let random = randomSights.slice(0, 5)
    return random
  }
}

const Heading = styled.h2`
  margin-bottom: 0;
`
