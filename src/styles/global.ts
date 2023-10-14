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
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', sans-serif;
  }

  h1 {
    color: ${({ theme }: any) => theme['brown-900']};
  }

  h2, h3 {
    color: ${({ theme }: any) => theme['brown-800']};
  }
`
