import styled from 'styled-components/macro'
import logo from '../../images/travelr_logo.png'

export default function Header() {
  return (
    <AppHeader>
      <h1>
        <img src={logo} alt="Logo" width="100" height="100" />
      </h1>
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
  h1 {
    margin: 0;
    font-size: 26px;

    img {
      height: auto;
      padding-top: 7px;
    }
  }
`
