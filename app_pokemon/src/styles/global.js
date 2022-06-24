import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body {
        -webkit-font-smoothing: antialiased;
    }
  
    * {
        font-family: "Open Sans", sans-serif;
        outline: none;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

`;
