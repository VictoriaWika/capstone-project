import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ArrowLeft } from '../../icons/arrow-left.svg'
import Button from '../Button/Button'

export default function GoBackButton() {
  const history = useHistory()

  return (
    <BackButton onClick={handleClick} aria-label="go-back">
      <ArrowLeft />
    </BackButton>
  )

  function handleClick() {
    history.push('/trips')
  }
}

const BackButton = styled(Button)`
  position: fixed;
  z-index: var(--zindex-fixed);
  top: 5px;
  left: 0;
  background: transparent;
`
