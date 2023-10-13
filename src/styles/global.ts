import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${({ theme }: any) => theme['background-100']};
    -webkit-font-smoothing: antialiased;
    margin: 0 1rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1 {
    color: ${({ theme }: any) => theme['brown-900']};
    font-family: 'Baloo 2', sans-serif;
    line-height: 110%;
  }
`
