import { Route, Switch } from 'react-router-dom'
import { cities } from './capstone.json'
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
      <Switch>
        <Route exact path="/">
          <HomePage
            handleAddLike={addLike}
            likedPlaces={likedPlaces}
            allSights={allSights}
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
        <Route path="/trip">
          <CreatePage CreateTrip={CreateTrip} />
        </Route>
        <Route path="/yourtrips">
          <TripPage tripCards={tripCards} setTripCards={setTripCards} />
        </Route>
      </Switch>
      <Route exact path={['/', '/liked', '/search', '/trip', '/yourtrips']}>
        <Navigation />
      </Route>
      <Route exact path={['/trip', '/yourtrips']}>
        <TripNavigation />
      </Route>
    </>
  )

  function CreateTrip(newTripCard) {
    setTripCards([newTripCard, ...tripCards])
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
