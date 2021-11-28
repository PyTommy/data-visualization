import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import HomePage from './pages/HomePage'
import { Layout } from 'components/Layout'
import { ThemeProvider } from 'components/ThemeProvider'

export const App = () => {
  console.log('App')
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  )
}
