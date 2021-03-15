import styled from 'styled-components/macro'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { cities } from '../../capstone.json'

export default function CreateForm({ onCreateTrip }) {
  return (
    <Form data-testid="form" onSubmit={handleSubmit}>
      <Heading>Plan your Trip</Heading>
      <label>
        City
        <Select required name="city">
          {cities.map(({ name, id }) => (
            <option data-testid="select-option" key={id}>
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
      city: city.value,
      startDate: startDate.value,
      endDate: endDate.value,
    })
    form.reset()
    city.focus()
  }
}

const Form = styled.form`
  display: grid;
  gap: 16px;
  background: rgba(250, 250, 250, 0.9);
  padding: 20px;
`
const Heading = styled.h2`
  margin: 5px;
`
const Select = styled.select`
  appearance: none;
  border: 1px #eee solid;
  box-shadow: 1px 1px 2px #eee;
  width: 100%;
  font-family: inherit;
  padding: 2px;
  padding-top: 5px;
  font-size: inherit;
`
