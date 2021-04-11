import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import AttractionCard from '../../components/AttractionCardSecondary/AttractionCard.js'
import Button from '../../components/Button/Button'
import GoBackButton from '../../components/GoBackButton/GoBackButton'
import { ReactComponent as CheckSVG } from '../../icons/check.svg'
import { ReactComponent as PlusSVG } from '../../icons/plus.svg'
import ScrollToTop from '../../services/ScrollToTop'

export default function CityPage({ onAddSight, sights, tripCards }) {
  const { location } = useParams()
  const currentTripCard = tripCards.find(trip => trip.location === location)
  const currentSights = currentTripCard.sights.map(sight => sight.name)
  const filteredLocation = sights.filter(sight => sight.location === location)

  return (
    <PageLayout>
      <ScrollToTop />
      <GoBackButton />
      <Heading>Trip to: {location}</Heading>
      {filteredLocation.map(sight => (
        <div key={sight._id}>
          <AddButton
            onClick={() => {
              onAddSight(sight, location)
            }}
            aria-label="toggle-add-sight"
          >
            {currentSights.includes(sight.name) ? <CheckSVG /> : <PlusSVG />}
          </AddButton>
          <CardWrapper>
            <AttractionCard
              name={sight.name}
              image={sight.image}
              location={location}
              continent={sight.continent}
              description={sight.description}
            ></AttractionCard>
          </CardWrapper>
        </div>
      ))}
    </PageLayout>
  )
}

CityPage.propTypes = {
  onAddSight: PropTypes.func,
  sights: PropTypes.array,
  tripCards: PropTypes.array,
}

const PageLayout = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
`
const Heading = styled.h1`
  margin: 40px 0 0;
  font-size: 27px;
`
const AddButton = styled(Button)`
  position: relative;
  top: 195px;
  left: 260px;
  padding: 10px 12px 6px;
  z-index: var(--zindex-absolute);
`
const CardWrapper = styled.div`
  margin-top: -42px;
`
