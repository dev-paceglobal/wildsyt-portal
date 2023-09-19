import {Box, Button} from '@mui/material'
import {styled} from '@mui/system'

export const UIStyledButton = styled(Button)(({theme, btnType}) => ({
  backgroundColor: btnType === 'contained' ? theme.palette.primary.main : 'transparent',
  color: btnType === 'contained' ? theme.palette.primary.white : theme.palette.primary.main,
  fontSize: '18px !important',
  height: '95%',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '12px',
  '&:hover': {
    backgroundColor:
      btnType === 'contained' ? theme.palette.primary.mainLight : theme.palette.primary.main,
    color: btnType === 'contained' ? theme.palette.primary.white : theme.palette.primary.white,
  },
}))

export const UIStyledSimpleButton = styled(Button)(({theme, btnType}) => ({
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  fontSize: '18px !important',
  height: '95%',
  border: `0px solid ${theme.palette.primary.main}`,
  borderRadius: '12px',
  '&:hover': {
    backgroundColor:
      btnType === 'contained' ? theme.palette.primary.mainLight : theme.palette.primary.main,
    color: btnType === 'contained' ? theme.palette.primary.white : theme.palette.primary.white,
  },
}))
