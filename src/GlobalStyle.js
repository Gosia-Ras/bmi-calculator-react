import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
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
    padding: 10px;
  }
`;
