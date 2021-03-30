import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button/Button'
import { ReactComponent as ArrowLeft } from '../../icons/arrow-left.svg'

export default function GoBackButton() {
  const history = useHistory()

  return (
    <BackButton onClick={handleClick}>
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
