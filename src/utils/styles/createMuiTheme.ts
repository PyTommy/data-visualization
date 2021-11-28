import createTheme, {
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles/createTheme'
import shadows, { Shadows } from '@mui/material/styles/shadows'

import { Color } from './color.const'
import { BreakPoints } from 'utils/styles/breakPoints.const'
import { Palette } from 'utils/styles/palette.const'
import { Shape } from 'utils/styles/shape.const'

const defaultMuiThemeOptions: MuiThemeOptions = {
  palette: Palette,
  shape: Shape,
  shadows: shadows.map(() => 'none') as Shadows,
  breakpoints: {
    values: BreakPoints,
  },
  typography: {
    // fontSize: 16,
    h1: {
      color: Color.primary,
      display: 'block',
      fontSize: '2em',
      fontWeight: 'bold',
    },
    h2: {
      color: Color.primary,
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
    h3: {
      color: Color.primary,
      fontSize: '1.17em',
      fontWeight: 'bold',
    },
    h4: {
      color: Color.primary,
      fontSize: '1em',
      fontWeight: 'bold',
    },
    h5: {
      color: Color.primary,
      fontSize: '0.83em',
      fontWeight: 'bold',
    },
    h6: {
      color: Color.primary,
      fontSize: '0.67em',
      fontWeight: 'bold',
    },
  },
} as const

export const createMuiTheme = () =>
  createTheme({
    ...defaultMuiThemeOptions,
  })
