import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../../components/Button/Button'
import GoBackButton from '../../components/GoBackButton/GoBackButton'
import Header from '../../components/Header/Header'
import { ReactComponent as CheckSVG } from '../../icons/check.svg'
import { ReactComponent as PlusSVG } from '../../icons/plus.svg'
import ScrollToTop from '../../services/ScrollToTop'
import { v4 as uuidv4 } from 'uuid'

export default function CityPage({ onAddSight, sights, tripCards }) {
  const { location } = useParams()
  const currentTripCard = tripCards.find(trip => trip.location === location)
  const currentSights = currentTripCard.sights.map(item => item.name)

  return (
    <PageLayout>
      <ScrollToTop />
      <Header />
      <GoBackButton />
      <Heading>Trip to: {location}</Heading>
      {sights
        .filter(sight => sight.location === location)
        .map(sight => (
          <SightWrapper key={uuidv4()}>
            <AddButton
              onClick={() => {
                onAddSight(sight, location)
              }}
              aria-label="toggle-add-sight"
            >
              {currentSights.includes(sight.name) ? <CheckSVG /> : <PlusSVG />}
            </AddButton>
            <div>
              <AttractionName>{sight.name}</AttractionName>
              <Image src={sight.image} width="335" height="335" alt="" />
            </div>
          </SightWrapper>
        ))}
    </PageLayout>
  )
}

CityPage.propTypes = {
  sights: PropTypes.array,
  onAddSight: PropTypes.func,
  tripCards: PropTypes.array,
}

const PageLayout = styled.div`
  display: grid;
  gap: 16px;
  justify-content: center;
`
const Heading = styled.h2`
  margin: 40px 0 0;
`
const SightWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 16px;
`
const AddButton = styled(Button)`
  padding: 7px 12.5px;
  position: absolute;
  bottom: 22px;
  right: 16px;
  z-index: var(--zindex-absolute);
`
const AttractionName = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 80%;
  color: var(--color-white);
`
const Image = styled.img`
  border-radius: 12px;
  height: auto;
  box-shadow: inset 0 -60px 60px -60px #333;
`
