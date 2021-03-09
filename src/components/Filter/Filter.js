import styled from 'styled-components/macro'

export default function Filter({ userInput, setUserInput }) {
  return (
    <form>
      <Label>
        Sightseeing attraction:
        <input
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          placeholder="Times Square..."
        />
      </Label>
    </form>
  )
}

const Label = styled.form`
  display: grid;
  gap: 5px;
`
