import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { RecoilRoot } from 'recoil'

import HomePage from './pages/HomePage'
import { createMuiTheme } from './utils/styles/createMuiTheme'

export const App = () => {
  console.log('App')
  return (
    <RecoilRoot>
      <ThemeProvider theme={createMuiTheme()}>
        <HomePage />
      </ThemeProvider>
    </RecoilRoot>
  )
}
