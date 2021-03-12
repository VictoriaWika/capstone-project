import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { cities } from './capstone.json'
import AttractionCard from './components/AttractionCard/AttractionCard'
import CreateForm from './components/CreateForm/CreateForm'
import Filter from './components/Filter/Filter'
import TripCard from './components/TripCard/TripCard'

export default function App() {
  const [userInput, setUserInput] = useState('')
  const [likedPlaces, setLikedPlaces] = useState([])
  const [cards, setCards] = useState(loadFromLocal('cards') ?? [])

  useEffect(() => {
    saveToLocal('cards', cards)
  }, [cards])

  return (
    <AppLayout>
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
      <Filter userInput={userInput} setUserInput={setUserInput} />
      {cities.map(({ name, attraction, id }) => (
        <CardLayout key={id}>
          <h2>{name}</h2>
          {attraction
            .filter(item =>
              item.name.toLowerCase().includes(userInput.toLowerCase().trim())
            )
            .map(({ name, image }) => (
              <AttractionCard
                key={name}
                name={name}
                image={image}
                onLike={handleLikePlace}
                likedPlaces={likedPlaces}
              />
            ))}
        </CardLayout>
      ))}
    </AppLayout>
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
    let newArray

    if (likedPlaces.includes(name)) {
      newArray = likedPlaces.filter(likedPlace => likedPlace !== name)
    } else {
      newArray = [...likedPlaces, name]
    }

    setLikedPlaces(newArray)
  }
}
const AppLayout = styled.div`
  display: grid;
  justify-content: center;
  gap: 20px;
`
const CardLayout = styled.div`
  display: grid;
  gap: 10px;
`
