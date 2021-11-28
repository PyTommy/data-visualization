import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
  LinearProgress,
  Button,
} from '@mui/material'
import React from 'react'

import styled from 'styled-components'
import { Color } from 'utils/styles/color.const'

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <LinearProgress />
        <Toolbar>
          <IconButton
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const AppBar = styled(MuiAppBar)`
  color: ${Color.secondary};
`
