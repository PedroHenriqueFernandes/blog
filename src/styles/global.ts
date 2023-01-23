import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: 'Roboto', sans-serif;
  }
  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue"]};
  }
  body {
    background: ${(props) => props.theme["background"]};
    color: ${(props) => props.theme["text"]};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: regular;
    font-size: 1rem;
  }
`;