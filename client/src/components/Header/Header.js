import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import logo from '../../images/travelr_logo.png'

export default function Header() {
  return (
    <AppHeader as={NavLink} exact to="/" aria-label="home">
      <img src={logo} alt="Logo" width="100" height="100" />
    </AppHeader>
  )
}
const AppHeader = styled.header`
  text-align: center;
  background: var(--color-white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 4px;
  z-index: var(--zindex-fixed);

  img {
    height: auto;
    padding-top: 7px;
  }
`
