import styled from 'styled-components/macro'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { cities } from '../../capstone.json'
import { v4 as uuidv4 } from 'uuid'

export default function CreateForm({ onCreateTrip }) {
  return (
    <Form data-testid="form" onSubmit={handleSubmit}>
      <Heading>Plan your Trip</Heading>
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
    })
    form.reset()
  }
}

const Form = styled.form`
  display: grid;
  gap: 16px;
  background: var(--color-bg-light);
  padding: 20px;
  width: 335px;
  margin-top: 30px;
`
const Heading = styled.h2`
  margin: 5px 0;
`
const Select = styled.select`
  appearance: none;
  border: 1px var(--color-lightgrey) solid;
  box-shadow: 1px 1px 2px var(--color-lightgrey);
  width: 100%;
  font-family: inherit;
  padding: 2px;
  padding-top: 5px;
  font-size: inherit;
`
