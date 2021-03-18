import styled from 'styled-components/macro'

export default function Header({ title }) {
  return (
    <AppHeader>
      <h1>{title}</h1>
    </AppHeader>
  )
}
const AppHeader = styled.header`
  text-align: center;
  background: var(--color-lightgrey);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px;
  z-index: var(--zindex-fixed);
  h1 {
    margin: 0;
    font-size: 26px;
  }
`
