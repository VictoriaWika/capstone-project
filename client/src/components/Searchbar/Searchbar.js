import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as SearchSVG } from '../../icons/search.svg'
import { ReactComponent as CrossSVG } from '../../icons/cross.svg'
import Input from '../Input/Input'

export default function Searchbar({ userInput, setUserInput, text }) {
  return (
    <Form onSubmit={event => event.preventDefault()}>
      <Label>
        <SearchIcon>
          <SearchSVG />
        </SearchIcon>
        <SearchInput
          value={userInput}
          name="input"
          onChange={event => setUserInput(event.target.value)}
          placeholder={text}
        />
        <DeleteInput onClick={() => setUserInput('')}>
          <CrossSVG />
        </DeleteInput>
      </Label>
    </Form>
  )

  // function handleSubmit(event) {
  //   event.preventDefault()
  // }
}

Searchbar.propTypes = {
  userInput: PropTypes.string,
  setUserInput: PropTypes.func,
  text: PropTypes.string,
}

const Form = styled.form`
  width: 335px;
`
const Label = styled.label`
  display: grid;
  position: relative;
  gap: 5px;
`
const SearchInput = styled(Input)`
  padding-left: 40px;
`
const SearchIcon = styled.span`
    position: absolute;
    top: 9px;
    left: 10px;
`
const DeleteInput = styled.span`
    position: absolute;
    top: 9px;
    right: 10px;
`