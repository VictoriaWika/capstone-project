import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import SearchPage from './components/SearchPage/SearchPage'
import TripPage from './components/TripPage/TripPage'
import HomePage from './components/HomePage/HomePage'
import YourTripsPage from './components/YourTripsPage/YourTripsPage'
import TripNavigation from './components/TripNavigation/TripNavigation'
import { cities } from './capstone.json'

export default function App() {
  const [userInput, setUserInput] = useState('')
  const [likedPlaces, setLikedPlaces] = useState([])
  const [cards, setCards] = useState(loadFromLocal('cards') ?? [])

  let AllSights = cities
    .map(function (val) {
      return val.attraction
    })
    .reduce(function (pre, cur) {
      return pre.concat(cur)
    })

  useEffect(() => {
    saveToLocal('cards', cards)
  }, [cards])

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage
            handleLikePlace={handleLikePlace}
            likedPlaces={likedPlaces}
            AllSights={AllSights}
          />
        </Route>
        <Route path="/search">
          <SearchPage
            userInput={userInput}
            setUserInput={setUserInput}
            handleLikePlace={handleLikePlace}
            likedPlaces={likedPlaces}
          />
        </Route>
        <Route path="/trip">
          <TripPage CreateTrip={CreateTrip} />
        </Route>
        <Route path="/yourtrips">
          <YourTripsPage cards={cards} setCards={setCards} />
        </Route>
      </Switch>
      <Route exact path={['/', '/search', '/trip', '/yourtrips']}>
        <Navigation />
      </Route>
      <Route exact path={['/trip', '/yourtrips']}>
        <TripNavigation />
      </Route>
    </>
  )

  function CreateTrip(newCard) {
    setCards([newCard, ...cards])
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
}
