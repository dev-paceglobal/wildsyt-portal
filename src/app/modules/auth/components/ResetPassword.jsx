import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {useDispatch, useSelector} from 'react-redux'
import {apiPost} from '../../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../../apis/ApiEndpoints'
import UITypogrpahy from '../../../../components/UITypography/UITypography'
import UITextField from '../../../../components/UITextField/UITextField'
import UIButton from '../../../../components/UIButton/UIButton'
import {Grid} from '@mui/material'
import {toast} from 'react-toastify'
import {resetPasswordSchema} from '../schema'

const ResetPassword = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })

  const resetPasswordReducer = useSelector((state) => state?.resetData)

  const dispatch = useDispatch()

  const handleResetPassword = (data) => {
    const dataObj = {
      otp: resetPasswordReducer?.otp,
      password: data.newPassword,
      password_confirmation: data.confirmPassword,
      email: resetPasswordReducer.email,
    }
    // apiPost(
    //   `${ApiEndpoints.root}${ApiEndpoints.resetPassword}`,
    //   dataObj,
    //   (res) => {
    //     toast.success(res.message)
    //     navigate('/auth/login')
    //   },
    //   (err) => {
    //     toast.error(err.response.data.message)
    //   }
    // )
  }
  return (
    <>
      <Grid container pb={2}>
        <Grid item xs={12}>
          <UITypogrpahy type='heading' title='Reset Password' textAlign='center' />
          <UITypogrpahy title='Reset your password' textAlign='center' />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(handleResetPassword)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <UITextField
              type='password'
              variant='outlined'
              fullWidth
              control={control}
              errorMessage={errors.newPassword?.message}
              name='newPassword'
              label='New Password'
            />
          </Grid>
          <Grid item xs={12}>
            <UITextField
              type='password'
              variant='outlined'
              fullWidth
              control={control}
              errorMessage={errors.confirmPassword?.message}
              name='confirmPassword'
              label='Confirm Password'
            />
          </Grid>

          <Grid item xs={12}>
            <UIButton btnType='contained' fullWidth label='Continue' type='submit' />
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default ResetPassword
