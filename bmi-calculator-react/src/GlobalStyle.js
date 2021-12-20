import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    overflow-y: scroll;
 }

*, ::after, ::before {
box-sizing: inherit;
}

body {
    max-width: 1000px;
    margin: 0px auto;
    font-family: "Maven Pro", sans-serif;
    background-color: rgba(224,238,239,255)

  }
`;
