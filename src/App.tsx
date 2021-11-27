import { ThemeProvider } from '@mui/material/styles'
import React from 'react'

import { createMuiTheme } from './utils/styles/createMuiTheme'

export const App = () => {
  return <ThemeProvider theme={createMuiTheme()}>Hello World!</ThemeProvider>
}
