import React from 'react'
import Input from '@mui/material/Input'
import {Button, IconButton} from '@mui/material'
import classes from './ButtonUI.module.css'
import {UIStyledButton, UIStyledSimpleButton} from './ui'

const UIButton = ({
  icon,
  label,
  variant,
  btnType,
  isLoading,
  iconPosition,
  stylecolor,
  type,
  className,
  ...rest
}) => {
  const addClasses = `${classes.button} font-gilroy ${className} !py-4`

  return btnType == 'contained' ? (
    <UIStyledButton stylecolor={stylecolor} btnType={btnType} type={type} {...rest}>
      {label}
    </UIStyledButton>
  ) : btnType == 'outlined' ? (
    <UIStyledButton btnType={btnType} type={type} {...rest}>
      {label}
    </UIStyledButton>
  ) : btnType == 'icon' ? (
    iconPosition == 'start' ? (
      <IconButton variant={variant} startIcon={icon} stylecolor={stylecolor} {...rest}>
        {label}
      </IconButton>
    ) : (
      <IconButton variant={variant} endIcon={icon} stylecolor={stylecolor} {...rest}>
        {label}
      </IconButton>
    )
  ) : (
    <UIStyledSimpleButton type={type} {...rest}>
      {label}
    </UIStyledSimpleButton>
  )
}

export default UIButton
