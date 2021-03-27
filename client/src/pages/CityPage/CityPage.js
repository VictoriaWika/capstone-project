import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../../components/Button/Button'
import GoBackButton from '../../components/GoBackButton/GoBackButton'
import { ReactComponent as PlusSVG } from '../../icons/plus.svg'
import { ReactComponent as CheckSVG } from '../../icons/check.svg'

export default function CityPage({ allSights, onAddSight, tripCards }) {
  const { city } = useParams()
  const currentTripCard = tripCards.find(trip => trip.city === city)
  const currentSights = currentTripCard.sights.map(item => item.name)

  return (
    <PageLayout>
      <GoBackButton />
      <h1>Trip to: {city}</h1>
      {allSights.map(sight => (
        <SightWrapper key={sight.image}>
          <AddButton
            onClick={() => {
              onAddSight(sight, city)
            }}
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
const PageLayout = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
`
const SightWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
`
const AddButton = styled(Button)`
  padding-top: 8px;
`
const AttractionName = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 4px;
  left: 0;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background: var(--color-bg-light);
  padding: 10px;
`
const Image = styled.img`
  border-radius: 24px;
  height: auto;
`
