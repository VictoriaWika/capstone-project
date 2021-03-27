import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Overlay from '../../components/Overlay/Overlay'
import TripCard from '../../components/TripCard/TripCard'

export default function TripPage({
  handleDeleteTrip,
  open,
  setTripCards,
  tripCards,
}) {
  return (
    <PageLayout>
      {open === true && <Overlay />}
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
    </PageLayout>
  )
}

TripPage.propTypes = {
  tripCards: PropTypes.array,
  setTripCards: PropTypes.func,
  handleDeleteTrip: PropTypes.func,
}

const PageLayout = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`
const Heading = styled.h2`
  margin-bottom: 0;
`
