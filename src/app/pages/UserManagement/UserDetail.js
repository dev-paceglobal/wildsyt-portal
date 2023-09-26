import React, {useEffect, useState} from 'react'
import {Grid} from '@mui/material'
import {useParams} from 'react-router-dom'
import useUser from '../../../hooks/useUser'
import {apiGet, apiPut} from '../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import UIDivider from '../../../components/UIDivider/UIDivider'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import UISwitch from '../../../components/UISwitch/UISwitch'
import {toast} from 'react-toastify'

const UserDetail = () => {
  const {id} = useParams()
  const [user, setUser] = useState({})

  const getUserById = () => {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.users}${id}`,
      (res) => {
        setUser(res.data)
      },
      (err) => {
        toast.error(err.response.data.message)
      }
    )
  }

  const handleStatus = (id, status) => {
    const dataObj = {
      status: status == 1 ? 'inactive' : 'active',
    }
    apiPut(
      `${ApiEndpoints.root}${ApiEndpoints.updateUser}${id}`,
      dataObj,
      (res) => {
        toast.success(res.message)
        getUserById()
      },
      (err) => {
        toast.error(err.response.data.message)
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
        <Grid item xs={12} display='flex' alignItems='center'>
          <UITypogrpahy
            type='subHeading'
            title='Status:'
            sx={{color: (theme) => theme.palette.primary.black}}
          />
          <UISwitch
            checked={user.status == 1 ? true : false}
            onChange={() => {
              handleStatus(user?.id, user?.status)
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default UserDetail
