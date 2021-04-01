import { useRef, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
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
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage
            handleAddLike={addLike}
            likedPlaces={likedPlaces}
            open={open}
            sights={sights}
          />
        </Route>
        <Route path="/liked">
          <LikePage
            handleAddLike={addLike}
            likedPlaces={likedPlaces}
            open={open}
            sights={sights}
          />
        </Route>
        <Route path="/search">
          <SearchPage
            handleAddLike={addLike}
            likedPlaces={likedPlaces}
            open={open}
            sights={sights}
          />
        </Route>
        <Route path="/create-trip">
          <CreatePage handleCreateTrip={createTrip} open={open} />
        </Route>
        <Route path="/trips">
          <TripPage
            handleDeleteTrip={deleteTrip}
            open={open}
            setTripCards={setTripCards}
            tripCards={tripCards}
          />
        </Route>
        <Route
          path="/:location"
          render={props => (
            <CityPage
              {...props}
              onAddSight={addSight}
              sights={sights}
              tripCards={tripCards}
            />
          )}
        />
      </Switch>
      <Route exact path={['/', '/liked', '/search', '/create-trip', '/trips']}>
        <div ref={node}>
          <NavIcon open={open} setOpen={setOpen} />
          <Navigation open={open} setOpen={setOpen} />
        </div>
      </Route>
      <Route exact path={['/create-trip', '/trips']}>
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
      newSights = currentSights.filter(current => current.name !== sight.name)
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
