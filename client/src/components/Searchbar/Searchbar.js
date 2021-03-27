import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export default function Searchbar({ userInput, setUserInput }) {
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

Searchbar.propTypes = {
  userInput: PropTypes.string,
  setUserInput: PropTypes.func,
}

const Form = styled.form`
  width: 335px;
`

const Label = styled.label`
  display: grid;
  gap: 5px;
`
