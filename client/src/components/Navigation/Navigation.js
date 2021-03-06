import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation({ open, setOpen }) {
  return (
    <Nav open={open}>
      <NavButton
        as={NavLink}
        onClick={() => setOpen(!open)}
        exact
        to="/"
        aria-label="home"
      >
        Home
      </NavButton>
      <NavButton
        as={NavLink}
        onClick={() => setOpen(!open)}
        to="/liked"
        aria-label="like"
      >
        Like
      </NavButton>
      <NavButton
        as={NavLink}
        onClick={() => setOpen(!open)}
        to="/search"
        aria-label="search"
      >
        Search
      </NavButton>
      <NavButton
        as={NavLink}
        onClick={() => setOpen(!open)}
        to="/create-trip"
        aria-label="trip"
      >
        Trip
      </NavButton>
    </Nav>
  )
}

Navigation.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgba(250, 250, 250, 0.98);
  height: 100vh;
  text-align: left;
  padding: 4rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.7s cubic-bezier(0.42, 0.97, 0.52, 1);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  width: 180px;
  z-index: var(--zindex-nav);
`
const NavButton = styled.button`
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1.5rem 0;
  transition: color 0.5s linear;
  color: var(--color-mediumgrey);

  &.active {
    color: black;
  }
`
