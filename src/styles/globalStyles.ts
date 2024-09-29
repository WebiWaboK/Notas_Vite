import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap');

  body {
    font-family: 'Noto Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
    color: #000;
  }

  * {
    box-sizing: border-box;
  }
`;
