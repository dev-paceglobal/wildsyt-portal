import {createTheme} from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(78, 137, 109)',
      mainLight: 'rgb(83 159 123)',
      yellow: '#f9a413',
      black: '#0e0e0e',
      grey1: '#878787',
      grey2: '#929292',
      grey3: '#515151',
      blue: '#1667d5',
      white: '#ffffff',
      black: '#000000',
    },
    indicators: {
      main: '#cc2828',
    },
  },
})

export default theme
