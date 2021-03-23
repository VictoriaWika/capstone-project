import { useHistory } from 'react-router-dom'
import Button from '../Button/Button'

export default function GoBackButton() {
  const history = useHistory()

  return <Button onClick={handleClick}>◁ Back</Button>

  function handleClick() {
    history.push('/trips')
  }
}
