import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Input from '../Input/Input'

export default function Searchbar({ userInput, setUserInput, text }) {
  return (
    <Form>
      <Label>
        <Input
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          placeholder={text}
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
