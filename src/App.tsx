import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ModalProvider, BaseModalBackground } from 'styled-react-modal'

interface FadingBackgroundProps {
  opacity: number
}

const FadingBackground = styled(BaseModalBackground)<FadingBackgroundProps>`
  opacity: ${(props) => props.opacity};
  transition: 0.2s ease-in-out;
`

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider backgroundComponent={FadingBackground}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ModalProvider>
    </ThemeProvider>
  )
}
