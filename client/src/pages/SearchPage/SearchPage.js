import { useState } from 'react'
import styled from 'styled-components/macro'
import { cities } from '../../capstone.json'
import AttractionCard from '../../components/AttractionCard/AttractionCard'
import Searchbar from '../../components/Searchbar/Searchbar'

export default function SearchPage({ handleAddLike, likedPlaces }) {
  const [userInput, setUserInput] = useState('')
  return (
    <PageLayout>
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
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`
const CardLayout = styled.div`
  display: grid;
  gap: 10px;
`
