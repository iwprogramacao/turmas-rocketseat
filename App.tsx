import React from 'react'
import theme from './src/theme'
import { Groups } from '@screens/Groups'
import { Container } from '@screens/Groups/styles'
import { ThemeProvider } from 'styled-components'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Groups />
      </Container>
    </ThemeProvider>
  )
}
