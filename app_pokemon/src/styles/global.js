import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Open Sans", sans-serif;
        outline: none;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
        line-height: normal;        
        padding: 0;
        margin: 0;
    }
`;
