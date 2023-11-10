import {styled} from '@mui/system'
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export const UIStyledSelect = styled(Select)(({theme}) => ({
    color: "red",
    borderRadius: "15px",
    

  }))
export const Div = styled(Typography)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "100%" 
  }))
export const InnerDiv = styled(Typography)(({theme}) => ({
    padding: "20px 20px",
    width: "300px !important" 
  }))