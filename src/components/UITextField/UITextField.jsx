import React, {useState} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {FormHelperText, IconButton, InputAdornment} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import {UIStyledOutlinedField, UIStyledStandardField, UIStyledNewsLetterField} from './ui'
import OTPInput from 'react-otp-input'

const UITextField = ({
  name,
  type,
  label,
  value,
  control,
  variant,
  errorMessage,
  handleChange,
  isOtp,
  isNewsLetter,
  otp,
  onChange,
  ...rest
}) => {
  const {control: fallbackControl} = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((prev) => !prev)
  return variant == 'outlined' && type !== 'password' ? (
    <>
      <Controller
        name={name}
        control={control == null ? fallbackControl : control}
        render={({field}) => (
          <>
            <UIStyledOutlinedField
              type={type}
              variant='outlined'
              label={label}
              value={value}
              onChange={handleChange}
              error={errorMessage && true}
              // InputLabelProps={{ shrink: true }}

              {...rest}
              {...field}
            />
          </>
        )}
      />
      {errorMessage && <FormHelperText sx={{color: 'red'}}>{errorMessage}</FormHelperText>}
    </>
  ) : variant == 'outlined' && type === 'password' ? (
    <>
      <Controller
        name={name}
        error={errorMessage && true}
        control={control == null ? fallbackControl : control}
        render={({field}) => (
          <>
            <UIStyledOutlinedField
              type={showPassword ? 'text' : 'password'}
              variant='outlined'
              error={errorMessage && true}
              label={label}
              value={value}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword} sx={{padding: '10px !important'}}>
                      {!showPassword ? (
                        <VisibilityOff sx={{color: (theme) => theme.palette.primary.grey6}} />
                      ) : (
                        <Visibility sx={{color: (theme) => theme.palette.primary.grey6}} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...field}
              {...rest}
            />
          </>
        )}
      />
      {errorMessage && <FormHelperText sx={{color: 'red'}}>{errorMessage}</FormHelperText>}
    </>
  ) : type == 'password' ? (
    <>
      <Controller
        name={name}
        error={errorMessage && true}
        control={control == null ? fallbackControl : control}
        render={({field}) => (
          <>
            <UIStyledOutlinedField
              type={showPassword ? 'text' : 'password'}
              variant={variant}
              error={errorMessage && true}
              helperText={errorMessage}
              label={label}
              value={value}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? (
                        <VisibilityOff
                          sx={(theme) => ({
                            color: theme.palette.primary.main,
                          })}
                        />
                      ) : (
                        <Visibility
                          sx={(theme) => ({
                            color: theme.palette.primary.main,
                          })}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...field}
              {...rest}
            />
          </>
        )}
      />
      {errorMessage && <FormHelperText sx={{color: 'red'}}>{errorMessage}</FormHelperText>}
    </>
  ) : isNewsLetter ? (
    <UIStyledNewsLetterField
      type={type}
      variant='outlined'
      label={label}
      value={value}
      onChange={handleChange}
      error={errorMessage && true}
      {...rest}
      // {...field}
    />
  ) : isOtp ? (
    <OTPInput
      value={otp}
      onChange={onChange}
      numInputs={6}
      renderSeparator={<span></span>}
      containerStyle={{justifyContent: 'space-around'}}
      errorMessage={errorMessage}
      inputStyle={{
        width: '55px',
        height: '60px',
        fontSize: '16px',
        borderRadius: '16px',
        background: 'transparent !important',
        borderColor: (theme) =>
          errorMessage.length > 1 ? theme.palette.indicators.main : theme.palette.primary.shade2,
        borderWidth: '1px',
        borderStyle: 'solid',
        '& :focus-visible': {
          outlineColor: (theme) => theme.palette.secondary.main,
          borderColor: (theme) => theme.palette.secondary.main,
        },
      }}
      renderInput={(props) => <input {...props} />}
    />
  ) : (
    <>
      <UIStyledOutlinedField
        type={type}
        variant='outlined'
        label={label}
        value={value}
        onChange={handleChange}
        error={errorMessage && true}
        name={name}
        {...rest}
      />
      {errorMessage && <FormHelperText sx={{color: 'red'}}>{errorMessage}</FormHelperText>}
    </>
  )
}

export default UITextField
