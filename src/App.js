import { Route, Switch } from 'react-router-dom'
import { cities } from './capstone.json'
import CityPage from './components/CityPage/CityPage'
import CreatePage from './components/CreatePage/CreatePage'
import HomePage from './components/HomePage/HomePage'
import LikePage from './components/LikePage/LikePage'
import Navigation from './components/Navigation/Navigation'
import SearchPage from './components/SearchPage/SearchPage'
import TripNavigation from './components/TripNavigation/TripNavigation'
import TripPage from './components/TripPage/TripPage'
import useLocalStorage from './hooks/useLocalStorage'

export default function App() {
  const [likedPlaces, setLikedPlaces] = useLocalStorage('liked places', [])
  const [tripCards, setTripCards] = useLocalStorage('tripCards', [])
  const allSights = cities.flatMap(city => city.attraction)

  return (
    <>
      {console.log(tripCards)}
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
          path="/:id"
          render={props => <CityPage {...props} />}
          onAddSightToTrip={addSightToTrip}
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

  function addSightToTrip(index) {
    const currentTripCard = tripCards[index]
    setTripCards([
      ...tripCards.slice(0, index),
      { ...currentTripCard, sights: 0 },
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
