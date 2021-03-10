import styled from 'styled-components/macro'

export default function Filter({ userInput, setUserInput }) {
  return (
    <form>
      <Label>
        Sightseeing attraction:
        <input
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          placeholder="Ca..."
        />
      </Label>
    </form>
  )
}

const Label = styled.label`
  display: grid;
  gap: 5px;
`
