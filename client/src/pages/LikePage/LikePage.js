import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import Overlay from '../../components/Overlay/Overlay'
import Searchbar from '../../components/Searchbar/Searchbar'
import ScrollToTop from '../../services/ScrollToTop'

export default function LikePage({ handleAddLike, likedPlaces, open, sights }) {
  const [userInput, setUserInput] = useState('')
  const filteredPlaces = sights.filter(
    sight =>
      likedPlaces.includes(sight.name) &&
      (sight.name.toLowerCase().includes(userInput.toLowerCase().trim()) ||
        sight.location.toLowerCase().includes(userInput.toLowerCase().trim()) ||
        sight.continent.toLowerCase().includes(userInput.toLowerCase().trim()))
  )

  return (
    <PageLayout>
      <ScrollToTop />
      {open && <Overlay />}
      <Heading>Your liked sights</Heading>
      <Searchbar
        userInput={userInput}
        setUserInput={setUserInput}
        text={'Search sights'}
      />
      {likedPlaces.length === 0 && <p>You haven't liked anything yet!</p>}
      {filteredPlaces.map(filteredSights => (
        <AttractionCard
          key={filteredSights._id}
          name={filteredSights.name}
          image={filteredSights.image}
          location={filteredSights.location}
          continent={filteredSights.continent}
          description={filteredSights.description}
          onAddLike={handleAddLike}
          likedPlaces={likedPlaces}
        />
      ))}
    </PageLayout>
  )
}

LikePage.propTypes = {
  handleAddLike: PropTypes.func,
  likedPlaces: PropTypes.array,
  open: PropTypes.bool,
  sights: PropTypes.array,
}

const PageLayout = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
`
const Heading = styled.h1`
  margin-bottom: 0;
  font-size: 27px;
`
