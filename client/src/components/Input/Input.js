import styled from 'styled-components/macro'

export default styled.input`
  appearance: none;
  border: 1px var(--color-lightgrey) solid;
  border-radius: 8px;
  width: 100%;
  height: 12px;
  padding: 6.5px;
  font-family: inherit;
  outline: none;

  &:focus {
    border-color: rgba(116, 235, 213, 0.5);
    box-shadow: 0 0 0 4px rgba(116, 235, 213, 0.1);
  }
`
