import { createGlobalStyle } from "styled-components";
import { variables } from "./variables";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  p {
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: pala;
    src:  url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;600;700&display=swap');;
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-family: 'Inconsolata', monospace;
    /* color: ${variables.white} */
  }
`;
