/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
// @theme
import theme from '@theme/theme'
// @routes
import { Routes } from '@routes/routes'

export function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
