import styled from 'styled-components/macro'
import { cities } from './capstone.json'
import AttractionCard from './components/AttractionCard'

export default function App() {
  return (
    <AppLayout>
      {cities.map(({ name, attraction, id }) => (
        <CardLayout key={id}>
          <h2>{name}</h2>
          {attraction.map(({ name, image }) => (
            <AttractionCard key={name} name={name} image={image} />
          ))}
        </CardLayout>
      ))}
    </AppLayout>
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
