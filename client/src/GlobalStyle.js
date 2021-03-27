import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
--color-bg-light: rgba(250, 250, 250, 0.9);
--color-overlay: rgba(74, 74, 74, 0.5);
--color-white: #fff;
--color-lightgrey: #eee;
--color-darkgrey: #bbb;

--zindex-absolute: 20;
--zindex-fixed: 30;
--zindex-overlay: 40;
--zindex-nav: 50;
--zindex-navicon: 60;
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
