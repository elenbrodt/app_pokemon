import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Open Sans", sans-serif;
        padding: 0;
        margin: 0 auto;
        outline: none;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
        line-height: normal;        
    }
`;
