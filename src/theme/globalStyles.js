import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
html {
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: hsl(180, 52%, 96%);
}
`;

export default GlobalStyle;