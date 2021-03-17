import styled from 'styled-components'
import TripCard from '../TripCard/TripCard'

export default function YourTripsPage({ cards, setCards }) {
  return (
    <TripWrapper>
      {cards.map(card => (
        <TripCard
          key={card.city}
          city={card.city}
          startDate={card.startDate}
          endDate={card.endDate}
          setCards={setCards}
        />
      ))}
    </TripWrapper>
  )
}

const TripWrapper = styled.div`
  display: grid;
  gap: 20px;
`
