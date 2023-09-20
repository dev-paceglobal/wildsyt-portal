import {Grid, Stack} from '@mui/material'
import React, {useEffect, useState} from 'react'
import FileInputButton from '../../../components/UIButton/FileUploadButton'
import {useSelector} from 'react-redux'
import {fileUpload} from '../../../apis/ApiRequest'
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import UIDivider from '../../../components/UIDivider/UIDivider'
import {getProfile} from '../../../store/userSlice'
import UITextField from '../../../components/UITextField/UITextField'
import EditProfileForm from '../../../container/Profile/EditProfileForm'
import EditProfilePassword from '../../../container/Profile/EditProfilePassword'
import Skeleton from '@mui/material/Skeleton';


const Profile = () => {
  const userDataReducer = useSelector((state) => state?.user)

  const dispatch = useDispatch()

  const _handleChangeImage = (e) => {
    if (e.target.files[0]) {
      const dataObj = {
        image: e.target.files[0]?.name,
      }
      fileUpload(`${ApiEndpoints.root}${ApiEndpoints.editProfile}`, e.target.files[0])
        .then((res) => {
          if (res.status) {
            toast.success(res.message)
            // dispatch(uploadProfileImage(res.data))
            dispatch(getProfile())
          }
        })
        .catch((err) => {
          toast.error('Something went wrong')
        })
    }
  }

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FileInputButton
            srcImg={userDataReducer?.user?.image}
            _handleChangeImage={_handleChangeImage}
            isImageUploading={userDataReducer.loading}
          />
        </Grid>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
      </Grid>
      <Grid container justifyContent='space-between' mt={4}>
        <Grid item xs={4}>
          {!userDataReducer.loading ? (
            <EditProfileForm />
          ) : (
            <>
              <Skeleton variant='text' sx={{fontSize: '2rem'}} />
              <Skeleton variant='text' sx={{fontSize: '2rem'}} />
              <Skeleton variant='text' sx={{fontSize: '2rem'}} />
            </>
          )}
        </Grid>
        <Grid item xs={4}>
          <EditProfilePassword />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  )
}

export default Profile
