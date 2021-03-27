import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button/Button'

export default function GoBackButton() {
  const history = useHistory()

  return <BackButton onClick={handleClick}>◁ Back</BackButton>

  function handleClick() {
    history.push('/trips')
  }
}

const BackButton = styled(Button)`
  position: fixed;
  z-index: var(--zindex-fixed);
  top: 0;
  left: 0;
  color: black;
  background: transparent;
`
