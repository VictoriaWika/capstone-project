import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function TripNavigation() {
  return (
    <NavWrapper>
      <Tab as={NavLink} to="/createtrip">
        Plan Trip
      </Tab>
      <Tab as={NavLink} to="/trips">
        Your Trips
      </Tab>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: var(--color-white);
`
const Tab = styled.link`
  text-decoration: none;
  padding: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--color-darkgrey);
  color: var(--color-darkgrey);

  &.active {
    color: black;
    border-bottom: 2px solid black;
  }
`
