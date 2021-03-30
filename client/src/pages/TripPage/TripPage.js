import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Overlay from '../../components/Overlay/Overlay'
import TripCard from '../../components/TripCard/TripCard'
import ScrollToTop from '../../services/ScrollToTop'

export default function TripPage({
  handleDeleteTrip,
  open,
  setTripCards,
  tripCards,
}) {
  return (
    <PageLayout>
      <ScrollToTop />
      {open === true && <Overlay />}
      <Heading>Trips</Heading>
      <main>
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
            location={card.location}
            continent={card.continent}
            sights={card.sights}
            startDate={card.startDate}
            endDate={card.endDate}
            setTripCards={setTripCards}
            onDeleteTrip={handleDeleteTrip}
          />
        ))}
      </main>
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
  margin-top: 100px;

  main {
    margin-top: 40px;
  }
`
const Heading = styled.h2`
  position: fixed;
  background: var(--color-white);
  top: 18px;
  left: 0;
  padding: 20px;
  width: 100vw;
`
