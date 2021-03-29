import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
--color-bg-light: rgba(250, 250, 250, 0.9);
--color-overlay: rgba(74, 74, 74, 0.5);
--color-white: #fff;
--color-lightgrey: #ddd;
--color-mediumgrey: #bbb;
--color-blue: #acb6e5;
--color-turquoise: #74ebd5;
--color-pink: #f80759;

--color-text: #222;

--zindex-absolute: 20;
--zindex-fixed: 30;
--zindex-overlay: 40;
--zindex-nav: 50;
--zindex-navicon: 60;
}
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Nunito', sans-serif;
  color: var(--color-text);
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
