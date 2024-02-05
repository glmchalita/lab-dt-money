import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color['green-500']};
    border-radius: 6px;
  }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: ${({ theme }) => theme.color['gray-800']};
    color: ${({ theme }) => theme.color['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    border: 0;
    line-height: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
