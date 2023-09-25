import React, {useEffect} from 'react'
import {TablesWidget10} from '../../../_metronic/partials/widgets'
import UISwitch from '../../../components/UISwitch/UISwitch'
import UIButton from '../../../components/UIButton/UIButton'
import useUser from '../../../hooks/useUser'
import UsersTable from '../../../container/Users/UsersTable'
import {apiPut} from '../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import {toast} from 'react-toastify'
import {Grid, Paper} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import AddIcon from '@mui/icons-material/Add'

export const UserManage = () => {
  const [getUsers, users] = useUser()

  useEffect(() => {
    getUsers()
  }, [])

  const handleStatus = (id, status) => {
    const dataObj = {
      status: status == 1 ? 'inactive' : 'active',
    }
    apiPut(
      `${ApiEndpoints.root}${ApiEndpoints.updateUser}${id}`,
      dataObj,
      (res) => {
        console.log('res', res)
        toast.success(res.message)
        getUsers()
      },
      (err) => {
        console.log('err', err)
      }
    )
  }

  return (
    <>
      <Paper elevation={2} sx={{borderRadius: '15px', padding: '30px'}}>
        <Grid container spacing={3} justifyContent='space-between'>
          <Grid item xs={6}>
            <UITypogrpahy type='subHeading' title='User Management' />
          </Grid>
          <Grid item xs={12}>
            <UsersTable users={users} handleStatus={handleStatus} />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
