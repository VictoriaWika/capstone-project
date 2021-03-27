import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

export default function NavIcon({ open, setOpen }) {
  return (
    <StyledNavIcon open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledNavIcon>
  )
}

NavIcon.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

const StyledNavIcon = styled.button`
  position: fixed;
  top: 5px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: var(--zindex-navicon);

  &:focus {
    outline: none;
  }

  div {
    width: 30px;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.7s ease-in-out;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
