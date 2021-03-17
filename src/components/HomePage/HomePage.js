import styled from 'styled-components/macro'
import Discover from '../Discover/Discover'
import Header from '../Header/Header'

export default function HomePage({ handleLikePlace, likedPlaces, AllSights }) {
  return (
    <PageLayout>
      <Header title="Travelr" />
      <Discover
        handleLikePlace={handleLikePlace}
        likedPlaces={likedPlaces}
        AllSights={AllSights}
      />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`
