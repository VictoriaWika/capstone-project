import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import Overlay from '../../components/Overlay/Overlay'
import Searchbar from '../../components/Searchbar/Searchbar'
import ScrollToTop from '../../services/ScrollToTop'

export default function SearchPage({
  handleAddLike,
  likedPlaces,
  open,
  sights,
}) {
  const [userInput, setUserInput] = useState('')
  const filteredSights = sights.filter(sight =>
    sight.name.toLowerCase().includes(userInput.toLowerCase().trim())
  )
  return (
    <PageLayout>
      <ScrollToTop />
      {open === true && <Overlay />}
      <Heading>Search the world</Heading>
      <Searchbar
        userInput={userInput}
        setUserInput={setUserInput}
        text={'Wanderlust?'}
      />
      {filteredSights.map(({ name, _id, image }) => (
        <AttractionCard
          key={_id}
          name={name}
          image={image}
          onAddLike={handleAddLike}
          likedPlaces={likedPlaces}
        />
      ))}
    </PageLayout>
  )
}

SearchPage.propTypes = {
  likedPlaces: PropTypes.array,
  handleAddLike: PropTypes.func,
  open: PropTypes.bool,
}

const PageLayout = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 20px;
  gap: 16px;
`
const Heading = styled.h2`
  margin-bottom: 0;
`
