import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import React from 'react'

import { createMuiTheme } from 'utils/styles/createMuiTheme'

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={createMuiTheme()}>{children}</MuiThemeProvider>
  )
}
