import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../../components/Button/Button'
import GoBackButton from '../../components/GoBackButton/GoBackButton'
import Header from '../../components/Header/Header'
import { ReactComponent as CheckSVG } from '../../icons/check.svg'
import { ReactComponent as PlusSVG } from '../../icons/plus.svg'
import ScrollToTop from '../../services/ScrollToTop'

export default function CityPage({ allSights, onAddSight, tripCards }) {
  const { city } = useParams()
  const currentTripCard = tripCards.find(trip => trip.city === city)
  const currentSights = currentTripCard.sights.map(item => item.name)

  return (
    <PageLayout>
      <ScrollToTop />
      <Header />
      <GoBackButton />
      <Heading>Trip to: {city}</Heading>
      {allSights.map(sight => (
        <SightWrapper key={sight.image}>
          <AddButton
            onClick={() => {
              onAddSight(sight, city)
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
  allSights: PropTypes.array,
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
  bottom: 16px;
  right: 16px;
  z-index: var(--zindex-absolute);
`
const AttractionName = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 4px;
  left: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: var(--color-bg-light);
  padding: 10px;
`
const Image = styled.img`
  border-radius: 12px;
  height: auto;
`
