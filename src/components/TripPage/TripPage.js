import styled from 'styled-components/macro'
import TripCard from '../TripCard/TripCard'

export default function TripPage({
  tripCards,
  setTripCards,
  handleDeleteTrip,
}) {
  return (
    <TripWrapper>
      <Heading>Your planned Trips</Heading>
      {tripCards.length === 0 ? (
        <p>You have no planned Trips yet!</p>
      ) : (
        <span>
          You have {tripCards.length}{' '}
          {tripCards.length === 1 ? 'trip' : 'trips'} planned
        </span>
      )}
      {tripCards.map(card => (
        <TripCard
          key={card.id}
          id={card.id}
          city={card.city}
          sights={card.sights}
          startDate={card.startDate}
          endDate={card.endDate}
          setTripCards={setTripCards}
          onDeleteTrip={handleDeleteTrip}
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
