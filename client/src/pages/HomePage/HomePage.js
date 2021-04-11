import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import Button from '../../components/Button/Button'
import Overlay from '../../components/Overlay/Overlay'
import ScrollToTop from '../../services/ScrollToTop'

export default function HomePage({ handleAddLike, likedPlaces, open, sights }) {
  const [randomSights, setRandomSights] = useState([])
  useEffect(() => {
    randomizeSights()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sights])

  return (
    <PageLayout>
      <ScrollToTop />
      {open && <Overlay />}
      <Heading>Discover the world</Heading>
      {randomSights.map(sight => (
        <AttractionCard
          key={sight._id}
          name={sight.name}
          image={sight.image}
          location={sight.location}
          continent={sight.continent}
          description={sight.description}
          onAddLike={handleAddLike}
          likedPlaces={likedPlaces}
        >
          {sight.name}
        </AttractionCard>
      ))}
      <Button
        onClick={() => {
          randomizeSights()
          window.scrollTo(0, 0)
        }}
        aria-label="shuffle-random-suggestions"
      >
        Show new sights
      </Button>
    </PageLayout>
  )

  function randomizeSights() {
    const sightsRandom = JSON.parse(JSON.stringify(sights)).sort(
      () => 0.5 - Math.random()
    )
    const randomSights = sightsRandom.slice(0, 5)
    setRandomSights(randomSights)
  }
}

HomePage.propTypes = {
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
  font-size: 27px;
  margin-bottom: 0;
  width: 335px;
`
