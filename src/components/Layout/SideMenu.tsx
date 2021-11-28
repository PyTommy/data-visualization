import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

import styled from 'styled-components'

interface Props {
  open: boolean
}

export const SideMenu: React.FC<Props> = ({ open }) => {
  return (
    <StyledDrawer open={open}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
