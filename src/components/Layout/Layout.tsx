import React, { ReactNode } from 'react'

import { Header } from './Header'
import styled from 'styled-components'

interface LayoutProps {
  children: ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  display: 'flex';
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`

const Main = styled.main`
  overflow: scroll;
  width: 100%;
  height: 100%;
`
