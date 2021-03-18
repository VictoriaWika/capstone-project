import styled from 'styled-components/macro'
import AttractionCard from '../AttractionCard/AttractionCard'
import { cities } from '../../capstone.json'
import Searchbar from '../Searchbar/Searchbar'

export default function SearchPage({
  userInput,
  setUserInput,
  onLikePlace,
  likedPlaces,
}) {
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
                LikePlace={onLikePlace}
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
