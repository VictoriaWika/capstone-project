import { useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../AttractionCard/AttractionCard'
import Searchbar from '../Searchbar/Searchbar'

export default function LikePage({ allSights, likedPlaces, handleAddLike }) {
  const [userInput, setUserInput] = useState('')
  const filteredPlaces = allSights
    .filter(sights => likedPlaces.includes(sights.name))
    .filter(sights =>
      sights.name.toLowerCase().includes(userInput.toLowerCase().trim())
    )
  return (
    <PageLayout>
      <Searchbar userInput={userInput} setUserInput={setUserInput} />
      <Heading>Your liked Places</Heading>
      {likedPlaces.length === 0 && <p>You haven't liked anything yet!</p>}
      {filteredPlaces.map(filteredSights => (
        <AttractionCard
          key={filteredSights.name}
          name={filteredSights.name}
          image={filteredSights.image}
          onAddLike={handleAddLike}
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
