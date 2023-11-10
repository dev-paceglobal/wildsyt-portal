import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, useNavigate} from 'react-router-dom'
import {Grid} from '@mui/material'
import UITypogrpahy from '../../../../components/UITypography/UITypography'
import UITextField from '../../../../components/UITextField/UITextField'
import UIButton from '../../../../components/UIButton/UIButton'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {forgotPasswordSchema} from '../schema'
import {apiPost} from '../../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../../apis/ApiEndpoints'
import {toast} from 'react-toastify'
import { resetPasswordData } from '../../../../store/resetPasswordSlice'

export function ForgotPassword() {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const dispatch = useDispatch()

  const handleForgetPassword = (data) => {
    const dataObj = {
      email: data.email,
    }
    // apiPost(
    //   `${ApiEndpoints.root}${ApiEndpoints.forgetPassword}`,
    //   dataObj,
    //   (res) => {
    //     toast.success(res.message)
    //     navigate('/auth/otp-verification')
    //     dispatch(resetPasswordData(dataObj))
    //   },
    //   (err) => {
    //     toast.error(err?.response?.data?.message)
    //   }
    // )
  }

  return (
    <>
      <Grid container pb={2}>
        <Grid item xs={12}>
          <UITypogrpahy type='heading' title='Forget Password' textAlign='center' />
          <UITypogrpahy title='Enter your email' textAlign='center' />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(handleForgetPassword)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <UITextField
              type='email'
              variant='outlined'
              fullWidth
              control={control}
              errorMessage={errors.email?.message}
              name='email'
              label='Email'
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
