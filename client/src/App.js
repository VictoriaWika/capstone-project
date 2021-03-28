import { useRef, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavIcon from './components/NavIcon/NavIcon'
import Navigation from './components/Navigation/Navigation'
import TripNavigation from './components/TripNavigation/TripNavigation'
import useLocalStorage from './hooks/useLocalStorage'
import useOnClickOutside from './hooks/useOnClickOutside'
import useSights from './hooks/useSights'
import CityPage from './pages/CityPage/CityPage'
import CreatePage from './pages/CreatePage/CreatePage'
import HomePage from './pages/HomePage/HomePage'
import LikePage from './pages/LikePage/LikePage'
import SearchPage from './pages/SearchPage/SearchPage'
import TripPage from './pages/TripPage/TripPage'

export default function App() {
  const [likedPlaces, setLikedPlaces] = useLocalStorage('liked places', [])
  const [tripCards, setTripCards] = useLocalStorage('tripCards', [])
  const [open, setOpen] = useState(false)
  const node = useRef()
  const sights = useSights()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage
            open={open}
            handleAddLike={addLike}
            likedPlaces={likedPlaces}
            onSightRandomizer={sightRandomizer}
          />
        </Route>
        <Route path="/liked">
          <LikePage
            open={open}
            likedPlaces={likedPlaces}
            handleAddLike={addLike}
            sights={sights}
          />
        </Route>
        <Route path="/search">
          <SearchPage
            open={open}
            handleAddLike={addLike}
            likedPlaces={likedPlaces}
            sights={sights}
          />
        </Route>
        <Route path="/createtrip">
          <CreatePage
            open={open}
            handleCreateTrip={createTrip}
            sights={sights}
          />
        </Route>
        <Route path="/trips">
          <TripPage
            open={open}
            tripCards={tripCards}
            setTripCards={setTripCards}
            handleDeleteTrip={deleteTrip}
          />
        </Route>
        <Route
          path="/:location"
          render={props => (
            <CityPage
              {...props}
              open={open}
              sights={sights}
              onAddSight={addSight}
              tripCards={tripCards}
            />
          )}
        />
      </Switch>
      <Route exact path={['/', '/liked', '/search', '/createtrip', '/trips']}>
        <div ref={node}>
          <NavIcon open={open} setOpen={setOpen} />
          <Navigation open={open} setOpen={setOpen} />
        </div>
      </Route>
      <Route exact path={['/createtrip', '/trips']}>
        <TripNavigation />
      </Route>
    </>
  )

  function addSight(sight, location) {
    const currentTripCard = tripCards.find(trip => trip.location === location)
    const index = tripCards.findIndex(trip => trip.location === location)
    const currentSights = currentTripCard.sights

    let newSights
    if (currentSights.includes(sight)) {
      newSights = currentSights.filter(item => item.name !== sight.name)
    } else {
      newSights = [...currentSights, sight]
    }
    setTripCards([
      ...tripCards.slice(0, index),
      { ...currentTripCard, sights: newSights },
      ...tripCards.slice(index + 1),
    ])
  }

  function createTrip(newTripCard) {
    setTripCards([newTripCard, ...tripCards])
  }

  function deleteTrip(currentId) {
    const filteredTripCards = tripCards.filter(card => card.id !== currentId)
    setTripCards(filteredTripCards)
  }

  function sightRandomizer() {
    const sightsRandom = sights.sort(() => 0.5 - Math.random())
    const randomSights = sightsRandom.slice(0, 5)
    return randomSights
  }

  function addLike(name) {
    let newLikedPlaces
    if (likedPlaces.includes(name)) {
      newLikedPlaces = likedPlaces.filter(likedPlace => likedPlace !== name)
    } else {
      newLikedPlaces = [...likedPlaces, name]
    }
    setLikedPlaces(newLikedPlaces)
  }
}
