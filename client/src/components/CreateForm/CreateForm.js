import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import { cities } from '../../capstone.json'
import Button from '../Button/Button'
import Input from '../Input/Input'

export default function CreateForm({ onCreateTrip }) {
  return (
    <Form onSubmit={handleSubmit} data-testid="form" aria-label="submit-form">
      <label>
        City
        <Select required name="city" data-testid="select">
          {cities.map(({ name, id }) => (
            <option key={id} data-testid={name}>
              {name}
            </option>
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
    const { city, startDate, endDate } = form.elements

    onCreateTrip({
      id: uuidv4(),
      city: city.value,
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
