import {styled} from '@mui/system'
import {Divider} from '@mui/material'

export const UIStyledDivider = styled(Divider)(({theme}) => ({
  backgroundColor: theme.palette.primary.grey2,
  height: '2px',
}))
