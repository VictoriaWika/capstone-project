import { Route, Switch } from 'react-router-dom'
import { cities } from './capstone.json'
import Navigation from './components/Navigation/Navigation'
import TripNavigation from './components/TripNavigation/TripNavigation'
import useLocalStorage from './hooks/useLocalStorage'
import CityPage from './pages/CityPage/CityPage'
import CreatePage from './pages/CreatePage/CreatePage'
import HomePage from './pages/HomePage/HomePage'
import LikePage from './pages/LikePage/LikePage'
import SearchPage from './pages/SearchPage/SearchPage'
import TripPage from './pages/TripPage/TripPage'

export default function App() {
  const [likedPlaces, setLikedPlaces] = useLocalStorage('liked places', [])
  const [tripCards, setTripCards] = useLocalStorage('tripCards', [])
  const allSights = cities.flatMap(city => city.attraction)

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage
            handleAddLike={addLike}
            likedPlaces={likedPlaces}
            onSightRandomizer={sightRandomizer}
          />
        </Route>
        <Route path="/liked">
          <LikePage
            likedPlaces={likedPlaces}
            handleAddLike={addLike}
            allSights={allSights}
          />
        </Route>
        <Route path="/search">
          <SearchPage handleAddLike={addLike} likedPlaces={likedPlaces} />
        </Route>
        <Route path="/createtrip">
          <CreatePage handleCreateTrip={createTrip} />
        </Route>
        <Route path="/trips">
          <TripPage
            tripCards={tripCards}
            setTripCards={setTripCards}
            handleDeleteTrip={deleteTrip}
          />
        </Route>
        <Route
          path="/:city"
          render={props => (
            <CityPage
              {...props}
              allSights={allSights}
              onAddSight={addSight}
              tripCards={tripCards}
            />
          )}
        />
      </Switch>
      <Route exact path={['/', '/liked', '/search', '/createtrip', '/trips']}>
        <Navigation />
      </Route>
      <Route exact path={['/createtrip', '/trips']}>
        <TripNavigation />
      </Route>
    </>
  )

  function addSight(sight, city) {
    const currentTripCard = tripCards.find(trip => trip.city === city)
    const index = tripCards.findIndex(trip => trip.city === city)
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
    const allSightsRandom = allSights.sort(() => 0.5 - Math.random())
    const randomSights = allSightsRandom.slice(0, 5)
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
