import styled from 'styled-components/macro'
import Header from '../Header/Header'

export default function HomePage() {
  return (
    <>
      <Header title="Travelr" />
      <MaintenanceWrapper>
        <p>Coming soon!</p>
        <p>Meanwhile take a look at the other pages!</p>
      </MaintenanceWrapper>
    </>
  )
}

const MaintenanceWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`
