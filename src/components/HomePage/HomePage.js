import styled from 'styled-components/macro'
import Header from '../Header/Header'

export default function HomePage() {
  return (
    <>
      <Header title="Travelr" />
      <MT20>
        <p>Coming soon!</p>
        <p>Meanwhile take a look at the other pages!</p>
      </MT20>
    </>
  )
}

const MT20 = styled.div`
  margin-top: 20px;
  text-align: center;
`
