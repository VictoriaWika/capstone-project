import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import Button from '../Button/Button'
import Input from '../Input/Input'
import LocationPerContinent from '../../LocationPerContinent.json'
import { useState } from 'react'
import { useHistory } from 'react-router'

export default function CreateForm({ onCreateTrip }) {
  const { push } = useHistory()
  const all = LocationPerContinent
  const [continentInput, setContinentInput] = useState('Africa')
  const selectedContinent = all.find(
    ({ continent }) => continent === continentInput
  )

  return (
    <Form onSubmit={handleSubmit} data-testid="form" aria-label="submit-form">
      <label>
        Continent
        <Select
          required
          value={continentInput}
          onChange={event => setContinentInput(event.target.value)}
          name="continent"
          data-testid="select"
        >
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
          {selectedContinent.locations.map(city => (
            <option key={uuidv4()}>{city}</option>
          ))}
        </Select>
      </label>
      <label>
        Start date
        <Input required name="startDate" type="date" placeholder="YYYY-MM-DD" />
      </label>
      <label>
        End date
        <Input required name="endDate" type="date" placeholder="YYYY-MM-DD" />
      </label>
      <Button aria-label="submit-form">Create Trip</Button>
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
    push('/trips')
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
  outline: none;

  &:focus {
    border-color: rgba(116, 235, 213, 0.5);
    box-shadow: 0 0 0 4px rgba(116, 235, 213, 0.1);
  }
`
