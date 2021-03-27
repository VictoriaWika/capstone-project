import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { cities } from '../../capstone.json'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import Header from '../../components/Header/Header'
import Overlay from '../../components/Overlay/Overlay'
import Searchbar from '../../components/Searchbar/Searchbar'
import ScrollToTop from '../../services/ScrollToTop'

export default function SearchPage({ handleAddLike, likedPlaces, open }) {
  const [userInput, setUserInput] = useState('')
  return (
    <PageLayout>
      <ScrollToTop />
      <Header />
      {open === true && <Overlay />}
      <Heading>Search the world</Heading>
      <Searchbar
        userInput={userInput}
        setUserInput={setUserInput}
        text={'Wanderlust?'}
      />
      {cities.map(({ attraction, id }) => (
        <CardLayout key={id}>
          {attraction
            .filter(item =>
              item.name.toLowerCase().includes(userInput.toLowerCase().trim())
            )
            .map(({ name, image }) => (
              <AttractionCard
                key={name}
                name={name}
                image={image}
                onAddLike={handleAddLike}
                likedPlaces={likedPlaces}
              />
            ))}
        </CardLayout>
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
const CardLayout = styled.div`
  display: grid;
  gap: 16px;
`
const Heading = styled.h2`
  margin-bottom: 0;
`
