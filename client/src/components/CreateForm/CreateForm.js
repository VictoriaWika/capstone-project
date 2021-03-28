import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import Button from '../Button/Button'
import Input from '../Input/Input'
import LocationPerContinent from '../../LocationPerContinent.json'

export default function CreateForm({ onCreateTrip, sights }) {
  const allSightsContinents = sights.map(({ continent }) => continent)
  const continents = [...new Set(allSightsContinents)]
  const allSightsLocations = sights.map(({ location }) => location)
  const locations = [...new Set(allSightsLocations)]
  const all = LocationPerContinent //.flatMap(item => item.continent)
  const africa = LocationPerContinent[0]
  // const asia = LocationPerContinent[1]
  // const europa = LocationPerContinent[2]
  // const northAmerica = LocationPerContinent[3]
  // const oceania = LocationPerContinent[4]
  // const southAmerica = LocationPerContinent[5]

  // const indeOfLocal = LocationPerContinent.map(
  //   item => item.continent
  // ).findIndex(trip => trip.continent === continent)
  const cities = LocationPerContinent.map(item => item.locations)
  return (
    <Form onSubmit={handleSubmit} data-testid="form" aria-label="submit-form">
      <label>
        Continent
        <Select required name="continent" data-testid="select">
          {all.map(({ continent }) => (
            <option key={uuidv4()} name={continent} data-testid={continent}>
              {continent}
            </option>
          ))}
        </Select>
      </label>
      <label>
        Location
        <Select required name="location">
          {console.log(africa, cities, all)}
          {africa.continent === 'Africa' &&
            africa.locations.map(city => (
              <option key={uuidv4()}>{city}</option>
            ))}
        </Select>
      </label>
      <label>
        Start date
        <Input required name="startDate" type="date" />
      </label>
      <label>
        End date
        <Input required name="endDate" type="date" />
      </label>
      <Button>Create Trip</Button>
    </Form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { continent, location, startDate, endDate } = form.elements

    onCreateTrip({
      id: uuidv4(),
      continent: continent.value,
      location: location.value,
      startDate: startDate.value,
      endDate: endDate.value,
      sights: [],
    })
    form.reset()
  }
}

CreateForm.propTypes = {
  onCreateTrip: PropTypes.func,
}

const Form = styled.form`
  display: grid;
  gap: 16px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  border-radius: 12px;
  padding: 20px;
  width: 335px;
  margin: 75px auto 0;
`
const Select = styled.select`
  appearance: none;
  border: 1px var(--color-lightgrey) solid;
  border-radius: 8px;
  width: 100%;
  font-family: inherit;
  padding: 5px;
  font-size: inherit;
`
