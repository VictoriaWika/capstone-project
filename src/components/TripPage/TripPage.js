import CreateForm from '../CreateForm/CreateForm'
import TripCard from '../TripCard/TripCard'

export default function TripPage({ CreateTrip, cards, setCards }) {
  return (
    <>
      <CreateForm onCreateTrip={CreateTrip} />
      {cards.map(card => (
        <TripCard
          key={card.city}
          city={card.city}
          startDate={card.startDate}
          endDate={card.endDate}
          cards={cards}
          setCards={setCards}
        />
      ))}
    </>
  )
}
