import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: #f0f4ef; /* Color pastel para el fondo */
    color: #000; /* Color del texto */
  }

  h1, h2, h3 {
    color: #000;
    font-weight: 700; /* Estilo bold para títulos */
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export default GlobalStyles;
