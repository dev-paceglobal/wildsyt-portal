import {Avatar, Box, Button} from '@mui/material'
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

export const UIStyledIconButton = styled(Button)(({theme, variant}) => ({
  backgroundColor: variant === 'contained' ? theme.palette.primary.main : 'transparent',
  color: variant === 'contained' ? theme.palette.primary.white : theme.palette.primary.main,
  fontSize: '18px !important',
  height: '95%',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '12px',
  '&:hover': {
    backgroundColor:
      variant === 'contained' ? theme.palette.primary.mainLight : theme.palette.primary.main,
    color: variant === 'contained' ? theme.palette.primary.white : theme.palette.primary.white,
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
    backgroundColor: 'transparent',
    color: btnType === 'contained' ? theme.palette.primary.white : theme.palette.primary.black,
  },
}))

export const Input = styled('input')({
  display: 'none',
})

export const UIStyledInputButton = styled(Button)(({theme, data}) => ({
  // width: '100%',
  border: '0px solid grey',
  borderRadius: '50%',
  '& :hover::after': {
    opacity: 0.75,
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    opacity: 1,
    // backgroundImage: `url('${data}')`,
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },

  '&:hover::after': {
    opacity: '0.65 !important',
  },
  '&:hover': {
    background: 'transparent',
    opacity: '1 !important',
    '& > :first-child': {
      zIndex: 1,
    },
  },
  '& > span:focus-visible': {
    outline: 'transparent',
  },
}))

export const UILoadingBox = styled(Box)(({theme, data}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 100,
  height: 100,
}))
export const UIFileImg = styled('img')(({theme, data}) => ({
  objectFit: 'cover',
  borderRadius: '50%',
  height: 100,
  width: 100,
}))
export const FileAvatar = styled(Avatar)(({theme, data}) => ({
  height: 100,
  width: 100,
}))
export const UIBoxInput = styled(Box)(({theme, data}) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: -5,
  right: 5,
}))
export const UIFileMainBox = styled(Box)(({theme, data}) => ({
  position: 'relative',
  height: 100,
  width: 100,
}))
