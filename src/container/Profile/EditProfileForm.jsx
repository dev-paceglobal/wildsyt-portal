import {yupResolver} from '@hookform/resolvers/yup'
import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {editProfileSchema} from './schema'
import {Grid, Stack} from '@mui/material'
import UITextField from '../../components/UITextField/UITextField'
import UIButton from '../../components/UIButton/UIButton'
import {useDispatch, useSelector} from 'react-redux'
import UICountryInput from '../../components/UITextField/UICountryInput'
import {apiPost} from '../../apis/ApiRequest'
import {ApiEndpoints} from '../../apis/ApiEndpoints'
import {toast} from 'react-toastify'
import {getProfile} from '../../store/userSlice'

const EditProfileForm = () => {
  const dispatch = useDispatch()

  const userDataReducer = useSelector((state) => state?.user)
  console.log('userDataReducer', userDataReducer)

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      firstName: userDataReducer.user?.first_name ? userDataReducer?.user?.first_name : '',
      lastName: userDataReducer.user?.last_name ? userDataReducer?.user?.last_name : '',
      phoneNumber: userDataReducer.user?.phone ? userDataReducer.user?.phone : '',
    },
  })

  const handleEditProfile = (data) => {
    const dataObj = {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phoneNumber,
    }
    apiPost(
      `${ApiEndpoints.root}${ApiEndpoints.editProfile}`,
      dataObj,
      (res) => {
        toast.success(res.message)
        dispatch(getProfile())
      },
      (err) => {
        toast.error(err.message)
      }
    )
  }

  return (
    <form onSubmit={handleSubmit(handleEditProfile)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UITextField
            control={control}
            name='firstName'
            label='First Name'
            variant='outlined'
            errorMessage={errors?.firstName?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <UITextField
            control={control}
            name='lastName'
            label='Last Name'
            variant='outlined'
            errorMessage={errors?.lastName?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <UICountryInput
            control={control}
            name='phoneNumber'
            label='Phone Number'
            variant='outlined'
            errorMessage={errors?.phoneNumber?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <UIButton btnType='contained' label='Save' type='submit' fullWidth />
        </Grid>
      </Grid>
    </form>
  )
}

export default EditProfileForm
