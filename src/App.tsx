import React from 'react'
import { RecoilRoot } from 'recoil'

import HomePage from './pages/HomePage'
import { Layout } from 'components/Layout'
import { ThemeProvider } from 'components/ThemeProvider'

export const App = () => {
  console.log('App')
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Layout>
          <HomePage />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}
