import { useState } from 'react'
import styled from 'styled-components/macro'
import { cities } from '../../capstone.json'
import AttractionCard from '../AttractionCard/AttractionCard'
import Searchbar from '../Searchbar/Searchbar'

export default function SearchPage({ handleAddLike, likedPlaces }) {
  const [userInput, setUserInput] = useState('')
  return (
    <>
      <Searchbar userInput={userInput} setUserInput={setUserInput} />
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
                onAddLike={handleAddLike}
                likedPlaces={likedPlaces}
              />
            ))}
        </CardLayout>
      ))}
    </>
  )
}

const CardLayout = styled.div`
  display: grid;
  gap: 10px;
`
