import CreateForm from '../../components/CreateForm/CreateForm'

export default function CreatePage({ handleCreateTrip }) {
  return <CreateForm onCreateTrip={handleCreateTrip} />
}
