import styled from 'styled-components/macro'

export default styled.button`
  border: none;
  font-size: inherit;
  font-family: inherit;
  border-radius: 8px;
  padding: 10px 20px;
  color: white;
  background-image: linear-gradient(45deg, #acb6e5, #74ebd5);

  outline: none;

  &:focus {
    border-color: rgba(116, 235, 213, 0.5);
    box-shadow: 0 0 0 4px rgba(116, 235, 213, 0.1);
  }
`
