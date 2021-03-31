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
      {randomSights.map(item => (
        <AttractionCard
          key={item._id}
          name={item.name}
          image={item.image}
          location={item.location}
          continent={item.continent}
          description={item.description}
          onAddLike={handleAddLike}
          likedPlaces={likedPlaces}
        >
          {item.name}
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
  onrandomizeSights: PropTypes.func,
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
