import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import Overlay from '../../components/Overlay/Overlay'
import Searchbar from '../../components/Searchbar/Searchbar'
import ScrollToTop from '../../services/ScrollToTop'

export default function LikePage({ sights, handleAddLike, likedPlaces, open }) {
  const [userInput, setUserInput] = useState('')
  const filteredPlaces = sights.filter(
    sight =>
      likedPlaces.includes(sight.name) &&
      (sight.name.toLowerCase().includes(userInput.toLowerCase().trim()) ||
        sight.location.toLowerCase().includes(userInput.toLowerCase().trim()))
  )

  return (
    <PageLayout>
      <ScrollToTop />
      {open === true && <Overlay />}
      <Heading>Your liked sights</Heading>
      <Searchbar
        userInput={userInput}
        setUserInput={setUserInput}
        text={'Search sights'}
      />
      {likedPlaces.length === 0 && <p>You haven't liked anything yet!</p>}
      {filteredPlaces.map(filteredSights => (
        <AttractionCard
          key={uuidv4()}
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
  sights: PropTypes.array,
  handleAddLike: PropTypes.func,
  likedPlaces: PropTypes.array,
  open: PropTypes.bool,
}

const PageLayout = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
`
const Heading = styled.h2`
  margin-bottom: 0;
`
