import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation() {
  return (
    <Nav>
      <NavButton as={NavLink} exact to="/">
        Home
      </NavButton>
      <NavButton as={NavLink} to="/search">
        Search
      </NavButton>
      <NavButton as={NavLink} to="/trip">
        Trip
      </NavButton>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  bottom: 0;
  left: 0;
  background: #eee;
  width: 100%;
  z-index: 30;
`
const NavButton = styled.button`
  text-decoration: none;
  border-bottom: 2px solid #bbb;
  color: #bbb;

  &.active {
    color: black;
    border-bottom: 2px solid black;
  }
`
