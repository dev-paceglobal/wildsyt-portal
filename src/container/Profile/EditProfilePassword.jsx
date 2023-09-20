import {yupResolver} from '@hookform/resolvers/yup'
import React from 'react'
import {useForm} from 'react-hook-form'
import {editPasswordSchema, editProfileSchema} from './schema'
import {Grid, Stack} from '@mui/material'
import UITextField from '../../components/UITextField/UITextField'
import UIButton from '../../components/UIButton/UIButton'
import {useSelector} from 'react-redux'
import UICountryInput from '../../components/UITextField/UICountryInput'
import {apiPost} from '../../apis/ApiRequest'
import {ApiEndpoints} from '../../apis/ApiEndpoints'
import {toast} from 'react-toastify'

const EditProfilePassword = () => {
  const userDataReducer = useSelector((state) => state?.user)
  console.log('userDataReducer', userDataReducer)

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(editPasswordSchema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const handleEditProfile = (data) => {
    const dataObj = {
      old_password: data.oldPassword,
      password: data.newPassword,
      password_confirmation: data.confirmPassword,
    }
    apiPost(
      `${ApiEndpoints.root}${ApiEndpoints.changePassword}`,
      dataObj,
      (res) => {
        toast.success(res.message)
      },
      (err) => {
        toast.error(err.response.data.message)
      }
    )
  }

  return (
    <form onSubmit={handleSubmit(handleEditProfile)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UITextField
            control={control}
            name='oldPassword'
            label='Old Password'
            variant='outlined'
            errorMessage={errors?.oldPassword?.message}
            fullWidth
            type='password'
          />
        </Grid>
        <Grid item xs={12}>
          <UITextField
            control={control}
            name='newPassword'
            label='New Password'
            variant='outlined'
            errorMessage={errors?.newPassword?.message}
            fullWidth
            type='password'
          />
        </Grid>
        <Grid item xs={12}>
          <UITextField
            control={control}
            name='confirmPassword'
            label='Confirm Password'
            variant='outlined'
            errorMessage={errors?.confirmPassword?.message}
            fullWidth
            type='password'
          />
        </Grid>
        <Grid item xs={12}>
          <UIButton btnType='contained' label='Save' type='submit' fullWidth />
        </Grid>
      </Grid>
    </form>
  )
}

export default EditProfilePassword
