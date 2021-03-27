import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import Overlay from '../../components/Overlay/Overlay'
import Searchbar from '../../components/Searchbar/Searchbar'

export default function LikePage({
  allSights,
  handleAddLike,
  likedPlaces,
  open,
}) {
  const [userInput, setUserInput] = useState('')
  const filteredPlaces = allSights
    .filter(sights => likedPlaces.includes(sights.name))
    .filter(sights =>
      sights.name.toLowerCase().includes(userInput.toLowerCase().trim())
    )

  return (
    <PageLayout>
      {open === true && <Overlay />}
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

LikePage.propTypes = {
  allSights: PropTypes.array,
  handleAddLike: PropTypes.func,
  likedPlaces: PropTypes.array,
  open: PropTypes.bool,
}

const PageLayout = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
`
const Heading = styled.h2`
  margin-bottom: 0;
`
