import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import ContinentFilter from '../../components/ContinentFilter/ContinentFilter'
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
  const [filteredContinents, setFilteredContinents] = useState('All continents')
  const filteredSights = sights.filter(
    sight =>
      (sight.name.toLowerCase().includes(userInput.toLowerCase().trim()) ||
        sight.location
          .toLowerCase()
          .includes(userInput.toLowerCase().trim())) &&
      (filteredContinents === 'All continents' ||
        sight.continent === filteredContinents)
  )

  return (
    <PageLayout>
      <ScrollToTop />
      {open && <Overlay />}
      <Heading>Search the world</Heading>
      <Searchbar
        userInput={userInput}
        setUserInput={setUserInput}
        text={'Wanderlust?'}
      />
      <ContinentFilter
        filteredContinents={filteredContinents}
        setFilteredContinents={setFilteredContinents}
      />
      <div>
        {filteredSights.map(
          ({ name, _id, image, location, continent, description }) => (
            <AttractionCard
              key={_id}
              name={name}
              image={image}
              location={location}
              continent={continent}
              description={description}
              onAddLike={handleAddLike}
              likedPlaces={likedPlaces}
            />
          )
        )}
      </div>
    </PageLayout>
  )
}

SearchPage.propTypes = {
  likedPlaces: PropTypes.array,
  handleAddLike: PropTypes.func,
  open: PropTypes.bool,
  sights: PropTypes.array,
}

const PageLayout = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;

  > div {
    display: grid;
    gap: 16px;
  }
`
const Heading = styled.h1`
  margin-bottom: 0;
  font-size: 27px;
`
