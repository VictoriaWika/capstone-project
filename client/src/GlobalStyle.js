import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
--color-bg-light: rgba(250, 250, 250, 0.9);
--color-white: #fff;
--color-lightgrey: #eee;
--color-darkgrey: #bbb;

--zindex-fixed: 30;
--zindex-absolute: 20;
}
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
  background: var(--color-white);
}

input {
  font-size: 90%;
  padding: 4px;
}
`
