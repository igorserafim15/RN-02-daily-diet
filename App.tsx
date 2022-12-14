import { ThemeProvider } from 'styled-components/native'
// @theme
import theme from '@theme/index'
// @routes
import { Routes } from '@routes/index'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
