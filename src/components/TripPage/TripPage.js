import styled from 'styled-components/macro'
import TripCard from '../TripCard/TripCard'

export default function TripPage({ tripCards, setTripCards }) {
  return (
    <TripWrapper>
      <Heading>Your planned Trips</Heading>
      {tripCards.length === 0 && <p>You have no planned Trips yet!</p>}
      {tripCards.map(card => (
        <TripCard
          key={card.city}
          city={card.city}
          startDate={card.startDate}
          endDate={card.endDate}
          setTripCards={setTripCards}
        />
      ))}
    </TripWrapper>
  )
}

const TripWrapper = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 20px;
`
const Heading = styled.h2`
  margin-bottom: 0;
`
