import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --background: #e5e5e5;
    --green: #04D361;
    --text: #3A3A3A;
    
    --gray-400: #737380;
    --gray-500: #A8A8B3;
    --gray-700: #3D3D4D;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root {
    height: 100vh;
  }

  body {
    font: 400 1rem "Roboto", sans-serif;
    background-color: var(--background);
  }

  *, input, button  {
    font-family: "Roboto";
  }

  button {
   cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
