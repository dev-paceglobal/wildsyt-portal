import {styled} from '@mui/system'
import {Box, Switch, TextField} from '@mui/material'

export const UIStyledOutlinedField = styled(TextField)(({theme}) => ({
  color: theme.palette.primary.grey6,

  '& .MuiFormHelperText-root': {
    marginLeft: 0,
  },
  '& .MuiInputBase-root': {
    borderRadius: '16px !important',
    '> input': {
      color: theme.palette.primary.grey3,
    },
  },

  '.MuiOutlinedInput-root:hover': {
    borderRadius: '16px !important',
  },
  '.Mui-focused': {
    borderRadius: '16px',
  },
}))

export const UIStyledStandardField = styled(TextField)(({theme}) => ({
  border: 'none',
  outline: 'none',
  color: theme.palette.primary.grey6,
  backgroundColor: 'white',
  borderRadius: '0.5rem !important',
}))

// Country Input
export const CountryListWrapper = styled(Box)(({theme, error}) => ({
  height: '100%',
  width: '100%',
  '& .form-control': {
    padding: '14.5px 14px 12.5px 58px',
    width: '100%',
    height: '45px !important',
    // borderRadius: '8px',
    borderColor: error && 'red',
    backgroundColor: 'transparent !important',
    color: '#595959',
    border: theme.palette.primary.inputBorder,

    '&:hover': {
      borderColor: error ? 'red' : theme.palette.primary.main,
    },
    '&:focus': {
      borderColor: error ? 'red' : theme.palette.primary.main,
      boxShadow: 'none',
    },
  },
  '& .special-label': {
    display: 'block',
    left: '10px',
    color: error ? 'red' : theme.palette.secondary.main,
    fontFamily: "'Open Sans', 'sans-serif'",
    fontSize: '0.7rem',
  },
  '& .flag-dropdown': {
    backgroundColor: 'transparent !important',
    borderWidth: '0px 1px 0px 0px',
    borderStyle: 'solid',
    '> .selected-flag:hover': {
      backgroundColor: 'transparent !important',
    },
  },
}))

// Date Picker
// export const StyledDatePicker = styled(DatePicker)(({ theme, error }) => ({
//   //   color: theme.palette.primary.main,
//   width: "100%",
//   "& .MuiFormLabel-root": {
//     fontSize: "1rem",
//     color: error && "red",
//   },
//   "& .MuiInputBase-root": {
//     fontSize: "1rem",
//     fontWeight: 500,
//     borderRadius: "0.5rem !important",
//     height: "2.9em",
//     "& > input": {
//       padding: "13px",
//     },
//   },
//   ".css-1k1wi5o-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline":
//     {
//       borderColor: theme.palette.grey[400],
//     },
//   ".css-iuli2o-MuiFormLabel-root-MuiInputLabel-root.Mui-error": {
//     color: theme.palette.grey[800],
//   },
// }));

export const UIStyledNewsLetterField = styled(TextField)(({theme}) => ({
  border: `1px solid ${theme.palette.primary.shade2}`,
  outline: 'none',
  color: 'white !important',

  borderRadius: '0.5rem !important',
  backgroundColor: theme.palette.primary.main,

  '.MuiOutlinedInput-root': {
    '> input': {
      color: 'white !important',
    },
  },

  '& .MuiFormHelperText-root': {
    marginLeft: 0,
  },

  '.MuiOutlinedInput-root:hover': {
    borderRadius: '0.5rem !important',
  },
  '.Mui-focused': {
    borderRadius: '0.5rem',
    border: '0px solid #555555',
  },

  '& * > fieldset > legend': {
    display: 'none',
  },
  '& * > fieldset': {
    border: '0px',
  },
}))
