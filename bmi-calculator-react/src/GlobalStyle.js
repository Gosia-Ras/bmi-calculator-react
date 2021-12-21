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
    max-width: fit-content;
    margin: 0 auto;
    font-family: "Maven Pro", sans-serif;
    background-color: #d1d8e0;
    color: #4b6584;
  }
`;
