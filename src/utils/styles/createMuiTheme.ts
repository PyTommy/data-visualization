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
    fontSize: 12,
    h1: {
      color: Color.primary,
      display: 'block',
    },
    h2: {
      color: Color.primary,
    },
    h3: {
      color: Color.primary,
    },
    h4: {
      color: Color.primary,
    },
    h5: {
      color: Color.primary,
    },
    h6: {
      color: Color.primary,
    },
  },
} as const

export const createMuiTheme = () =>
  createTheme({
    ...defaultMuiThemeOptions,
  })
