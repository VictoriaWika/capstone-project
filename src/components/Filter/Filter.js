import styled from 'styled-components/macro'

export default function Filter({ userInput, setUserInput }) {
  return (
    <Form>
      <Label>
        Sightseeing attraction:
        <input
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          placeholder="Times Square"
        />
      </Label>
    </Form>
  )
}

const Form = styled.form`
  width: 335px;
`

const Label = styled.label`
  display: grid;
  gap: 5px;
`
