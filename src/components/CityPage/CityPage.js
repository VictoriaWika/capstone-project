import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button/Button'
import GoBackButton from '../GoBackButton/GoBackButton'

import image1 from './test1.webp'
import image2 from './test2.webp'

export default function CityPage({ onAddSightToTrip }) {
  const { id } = useParams()

  return (
    <div>
      <GoBackButton />
      <p>ReiseID: {id}</p>
      <div>
        <h2>Torre de Belem</h2>
        <Button onClick={() => onAddSightToTrip(index)}>
          + add sight to trip
        </Button>
        <Image src={image1} width="335" height="335" alt="" />
      </div>
      <div>
        <h2>Statue of Liberty</h2>
        <Button>+ add sight to trip</Button>
        <Image src={image2} width="335" height="335" alt="" />
      </div>
    </div>
  )
}

const Image = styled.img`
  border-radius: 24px;
  height: auto;
`
