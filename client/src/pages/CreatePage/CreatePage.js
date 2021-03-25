import styled from 'styled-components/macro'
import CreateForm from '../../components/CreateForm/CreateForm'

export default function CreatePage({ handleCreateTrip }) {
  return (
    <PageLayout>
      <CreateForm onCreateTrip={handleCreateTrip} />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`
