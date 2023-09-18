import {Box, Switch} from '@mui/material'
import {styled} from '@mui/system'

export const UIStyledSwitch = styled(Switch)(({theme}) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: `${theme.palette.primary.main}`,
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
}))
