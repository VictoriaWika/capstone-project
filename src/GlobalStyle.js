import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  /* by setting font-size in %, 
  there is no interferance with potential user settings */
  font-size: 112.5%; 
  padding: 20px;
  margin: 0;
  margin-bottom: 30px;
}

input {
  font-size: 90%;
  padding: 4px;
}
`
