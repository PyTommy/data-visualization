import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

interface Props {
  open: boolean
}

type MenuItem = { path: string; title: string }

const menuList: MenuItem[] = [
  {
    path: '/',
    title: 'Home',
  },
]

export const SideMenu: React.FC<Props> = ({ open }) => {
  return (
    <StyledDrawer open={open}>
      <nav>
        {menuList.map(({ title, path }) => (
          <NavLink to={path} key={title}>
            {title}
          </NavLink>
        ))}
      </nav>
    </StyledDrawer>
  )
}

const SidebarWidth = '240px'
const StyledDrawer = styled.menu<{ open: boolean }>`
  transition: width 0.05s ease-in;
  position: unset;
  top: unset;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  width: ${({ open }) => (open ? SidebarWidth : '0px')};
  border-right: 1.5px solid ${(props) => props.theme.palette.divider};
`
