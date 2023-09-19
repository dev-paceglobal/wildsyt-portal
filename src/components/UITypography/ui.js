import {Button, Typography} from '@mui/material'
import {styled} from '@mui/system'

export const UIMainBannerHeading = styled(Typography)(({theme, stylecolor, variant, isYellow}) => ({
  fontWeight: 700,
  color: isYellow ? theme.palette.primary.main : theme.palette.primary.black,
  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
  },
}))
export const UIHeadingTypography = styled(Typography)(({theme, stylecolor, variant, isYellow}) => ({
  fontWeight: 700,
  color: isYellow ? theme.palette.primary.main : theme.palette.primary.black,
}))

export const UISubHeadingTypography = styled(Typography)(({theme, stylecolor, variant}) => ({
  fontWeight: 700,
  color: theme.palette.primary.black,
  fontSize: '18px',
}))

export const UIMainDescriptionTypography = styled(Typography)(({theme, stylecolor, variant}) => ({
  fontWeight: 500,
  color: theme.palette.primary.black,
  fontSize: '28px',
}))

export const UIDescriptionTypography = styled(Typography)(
  ({theme, stylecolor, variant, isGrey}) => ({
    fontSize: '18px',
    fontWeight: 500,
    color: theme.palette.primary.grey1,
  })
)
export const UISubDescriptionTypography = styled(Typography)(({theme, stylecolor, variant}) => ({
  fontSize: '12px',
  fontWeight: 500,
  color: theme.palette.primary.grey3,
}))

export const UIAuthDescriptionTypography = styled(Typography)(
  ({theme, stylecolor, variant, isYellow}) => ({
    fontSize: '22px',
    fontWeight: 500,
    color: isYellow ? theme.palette.primary.main : theme.palette.primary.grey3,
  })
)
export const UIProductDetailTypography = styled(Typography)(({theme}) => ({
  fontSize: '24px',
  fontWeight: 500,
  color: theme.palette.primary.black,
}))

export const UIProductTabTypography = styled(Typography)(({theme}) => ({
  fontSize: '23px',
  fontWeight: 500,
  color: theme.palette.primary.black,
}))

export const UIProductPriceTypography = styled(Typography)(({theme}) => ({
  fontSize: '30px',
  fontWeight: 700,
  color: theme.palette.primary.black,
}))
