import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito', sans-serif;
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.h1};
    transition: all 0.50s linear;
  }

  h1 {
    color: ${({ theme }) => theme.h1};
    transition: all 0.50s linear;
  }
  
  span {
    color: ${({ theme }) => theme.h1};
    transition: all 0.50s linear;
  }
`