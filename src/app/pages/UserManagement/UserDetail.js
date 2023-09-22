import React, {useEffect, useState} from 'react'
import {Grid} from '@mui/material'
import {useParams} from 'react-router-dom'
import useUser from '../../../hooks/useUser'
import {apiGet} from '../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import UIDivider from '../../../components/UIDivider/UIDivider'
import UITypogrpahy from '../../../components/UITypography/UITypography'

const UserDetail = () => {
  const {id} = useParams()
  const [user, setUser] = useState({})

  console.log('id', id)

  const getUserById = () => {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.users}${id}`,
      (res) => {
        console.log('res', res)
        setUser(res.data)
      },
      (err) => {
        console.log('err', err)
      }
    )
  }

  useEffect(() => {
    getUserById()
  }, [])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <img src={user.image} height={90} style={{borderRadius: '20px'}} />
        </Grid>
        <Grid item xs={12}>
          <UIDivider />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={12}>
          <UITypogrpahy
            type='subHeading'
            title='Full Name:'
            sx={{color: (theme) => theme.palette.primary.black}}
          />
          <UITypogrpahy type='subHeading' title={user.name} sx={{fontWeight: 500}} />
        </Grid>
        <Grid item xs={12}>
          <UITypogrpahy
            type='subHeading'
            title='Phone Number:'
            sx={{color: (theme) => theme.palette.primary.black}}
          />
          <UITypogrpahy type='subHeading' title={user.phone} sx={{fontWeight: 500}} />
        </Grid>
        <Grid item xs={12}>
          <UITypogrpahy
            type='subHeading'
            title='Email:'
            sx={{color: (theme) => theme.palette.primary.black}}
          />
          <UITypogrpahy type='subHeading' title={user.phone} sx={{fontWeight: 500}} />
        </Grid>
        <Grid item xs={12}>
          <UITypogrpahy
            type='subHeading'
            title='Address:'
            sx={{color: (theme) => theme.palette.primary.black}}
          />
          <UITypogrpahy
            type='subHeading'
            title={'California United State'}
            sx={{fontWeight: 500}}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default UserDetail
