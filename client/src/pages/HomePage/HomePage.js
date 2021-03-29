import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import Button from '../../components/Button/Button'
import Overlay from '../../components/Overlay/Overlay'
import ScrollToTop from '../../services/ScrollToTop'

export default function HomePage({
  handleAddLike,
  likedPlaces,
  onSightRandomizer,
  open,
}) {
  const [randomSights, setRandomSights] = useState(onSightRandomizer())

  return (
    <PageLayout>
      <ScrollToTop />
      {open === true && <Overlay />}
      <Heading>Discover the world</Heading>
      {console.log(randomSights)}
      {randomSights.map(item => (
        <AttractionCard
          key={uuidv4()}
          name={item.name}
          image={item.image}
          onAddLike={handleAddLike}
          likedPlaces={likedPlaces}
        >
          {item.name}
        </AttractionCard>
      ))}
      <Button
        onClick={() => {
          setRandomSights(onSightRandomizer())
        }}
        aria-label="shuffle-random-suggestions"
      >
        Show new sights
      </Button>
    </PageLayout>
  )
}

HomePage.propTypes = {
  handleAddLike: PropTypes.func,
  likedPlaces: PropTypes.array,
  onSightRandomizer: PropTypes.func,
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
  width: 335px;
`
