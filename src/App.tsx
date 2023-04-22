import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ModalProvider } from 'styled-react-modal'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ModalProvider>
    </ThemeProvider>
  )
}
