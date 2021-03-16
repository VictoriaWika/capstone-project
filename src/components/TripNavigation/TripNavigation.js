import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function TripNavigation() {
  return (
    <NavWrapper>
      <Tab as={NavLink} to="/trip">
        Plan Trip
      </Tab>
      <Tab as={NavLink} to="/yourtrips">
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
  background: #fff;
`
const Tab = styled.link`
  text-decoration: none;
  padding: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #bbb;
  color: #bbb;

  &.active {
    color: black;
    border-bottom: 2px solid black;
  }
`
