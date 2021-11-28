import React, { ReactNode, useCallback, useState } from 'react'

import { Header } from './Header'
import { SideMenu } from './SideMenu'
import styled from 'styled-components'

interface LayoutProps {
  children: ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  const [openMenu, setOpenMenu] = useState(true)

  const toggleMenu = useCallback(() => {
    setOpenMenu((prev) => !prev)
  }, [setOpenMenu])

  return (
    <LayoutContainer>
      <Header toggleMenu={toggleMenu} />
      <UnderHeader>
        <SideMenu open={openMenu} />
        <Main>{children}</Main>
      </UnderHeader>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`

const UnderHeader = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

const Main = styled.main`
  overflow: scroll;
  width: 100%;
  height: 100%;
`
