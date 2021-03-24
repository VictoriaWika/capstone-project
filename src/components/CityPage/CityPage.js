import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from '../Button/Button'
import GoBackButton from '../GoBackButton/GoBackButton'

export default function CityPage({ allSights }) {
  const { city } = useParams()

  return (
    <PageLayout>
      <GoBackButton />
      <h1>Trip to: {city}</h1>
      {allSights.map((sight, index) => (
        <SightWrapper key={sight.image} sightIndex={index}>
          <Button onClick={() => console.log('add sight')}>
            + add sight to trip
          </Button>
          <div>
            <AttractionName>{sight.name}</AttractionName>
            <Image src={sight.image} width="335" height="335" alt="" />
          </div>
        </SightWrapper>
      ))}
      {console.log(allSights)}
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: grid;
  gap: 10px;
`
const SightWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
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
