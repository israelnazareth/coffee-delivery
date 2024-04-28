import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  :focus-visible {
    outline: ${({ theme }) => theme['purple-500']} solid 1px;
    border-radius: 0.2rem;
  }

  body {
    background-color: ${({ theme }) => theme['background-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  h1, h2, h3 {
    font-family: 'Baloo 2', sans-serif;
  }

  h1 {
    color: ${({ theme }) => theme['brown-900']};
  }

  h2, h3 {
    color: ${({ theme }) => theme['brown-800']};
  }


  .ikkaVS {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }


// Animations
@keyframes fadeIn {
    from {
    opacity: 0;
  }
    to {
    opacity: 1;
  }
}

@keyframes upToDown {
    from {
    opacity: 0;
    transform: translateY(-1rem);
  }
    to {
    opacity: 1;
    transform: translateY(0);
  }
}

`
