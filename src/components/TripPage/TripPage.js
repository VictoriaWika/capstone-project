import CreateForm from '../CreateForm/CreateForm'

export default function TripPage({ CreateTrip }) {
  return <CreateForm onCreateTrip={CreateTrip} />
}
