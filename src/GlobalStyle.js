import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  /* by setting font-size in %, there is no interferance with potential user settings */
  font-size: 112.5%; 
  margin: 20px;
}

input,
button {
  font-size: 90%;
  padding: 4px;
}

button {
  padding: 5px 10px;
}
`
