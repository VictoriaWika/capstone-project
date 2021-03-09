import { useState } from 'react'
import styled from 'styled-components/macro'
import { cities } from './capstone.json'
import AttractionCard from './components/AttractionCard/AttractionCard'
import Filter from './components/Filter/Filter'

export default function App() {
  const [userInput, setUserInput] = useState('')

  return (
    <>
      <Filter userInput={userInput} setUserInput={setUserInput} />
      <AppLayout>
        {cities.map(({ name, attraction, id }) => (
          <CardLayout key={id}>
            <h2>{name}</h2>
            {attraction
              .filter(item =>
                item.name.toLowerCase().includes(userInput.toLowerCase())
              )
              .map(({ name, image }) => (
                <AttractionCard key={name} name={name} image={image} />
              ))}
          </CardLayout>
        ))}
      </AppLayout>
    </>
  )
}
const AppLayout = styled.div`
  display: grid;
  justify-content: center;
`
const CardLayout = styled.div`
  display: grid;
  gap: 10px;
`
