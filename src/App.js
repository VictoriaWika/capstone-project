import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { cities } from './capstone.json'
import HomePage from './components/HomePage/HomePage'
import LikePage from './components/LikePage/LikePage'
import Navigation from './components/Navigation/Navigation'
import SearchPage from './components/SearchPage/SearchPage'
import TripNavigation from './components/TripNavigation/TripNavigation'
import TripPage from './components/TripPage/TripPage'
import YourTripsPage from './components/YourTripsPage/YourTripsPage'

export default function App() {
  const [userInput, setUserInput] = useState('')
  const [likedPlaces, setLikedPlaces] = useState(
    loadFromLocal('liked places') ?? []
  )
  const [tripCards, setTripCards] = useState(loadFromLocal('tripCards') ?? [])
  const allSights = cities.flatMap(city => city.attraction)
  const [randomSights, setRandom] = useState(sightRandomizer())

  useEffect(() => {
    saveToLocal('tripCards', tripCards)
  }, [tripCards])

  useEffect(() => {
    saveToLocal('liked places', likedPlaces)
  }, [likedPlaces])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage
            onLikePlace={handleLikePlace}
            likedPlaces={likedPlaces}
            allSights={allSights}
            randomSights={randomSights}
            setRandom={setRandom}
            onSightRandomizer={sightRandomizer}
          />
        </Route>
        <Route path="/liked">
          <LikePage
            userInput={userInput}
            setUserInput={setUserInput}
            likedPlaces={likedPlaces}
            onLikePlace={handleLikePlace}
            allSights={allSights}
          />
        </Route>
        <Route path="/search">
          <SearchPage
            userInput={userInput}
            setUserInput={setUserInput}
            onLikePlace={handleLikePlace}
            likedPlaces={likedPlaces}
          />
        </Route>
        <Route path="/trip">
          <TripPage CreateTrip={CreateTrip} />
        </Route>
        <Route path="/yourtrips">
          <YourTripsPage tripCards={tripCards} setTripCards={setTripCards} />
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

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  function loadFromLocal(key) {
    const jsonString = localStorage.getItem(key)
    const data = JSON.parse(jsonString)
    return data
  }

  function handleLikePlace(name) {
    let newLikedPlaces
    if (likedPlaces.includes(name)) {
      newLikedPlaces = likedPlaces.filter(likedPlace => likedPlace !== name)
    } else {
      newLikedPlaces = [...likedPlaces, name]
    }
    setLikedPlaces(newLikedPlaces)
  }

  function sightRandomizer() {
    const allSightsRandom = allSights.sort(() => 0.5 - Math.random())
    const randomSights = allSightsRandom.slice(0, 5)
    return randomSights
  }
}
