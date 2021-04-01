import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as SearchSVG } from '../../icons/search.svg'
import Input from '../Input/Input'

export default function Searchbar({ userInput, setUserInput, text }) {
  return (
    <Form>
      <Label>
        <span>
          <SearchSVG />
        </span>
        <SearchInput
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
  position: relative;
  gap: 5px;

  span {
    position: absolute;
    top: 9px;
    left: 10px;
  }
`
const SearchInput = styled(Input)`
  padding-left: 40px;
`
