import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material'
import React from 'react'

import { ProgressBar } from './ProgressBar'
import styled from 'styled-components'
import { Color } from 'utils/styles/color.const'

interface HeaderProps {
  toggleMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <div>
      <AppBar position="static">
        <ProgressBar />
        <Toolbar>
          <IconButton
            onClick={toggleMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DataVisualization
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const AppBar = styled(MuiAppBar)`
  color: ${Color.secondary};
`
