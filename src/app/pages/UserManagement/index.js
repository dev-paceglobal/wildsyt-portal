import React, { useEffect, useState } from 'react'
import { TablesWidget10 } from '../../../_metronic/partials/widgets'
import UISwitch from '../../../components/UISwitch/UISwitch'
import UIButton from '../../../components/UIButton/UIButton'
import useUser from '../../../hooks/useUser'
import UsersTable from '../../../container/Users/UsersTable'
import { apiPut } from '../../../apis/ApiRequest'
import { ApiEndpoints } from '../../../apis/ApiEndpoints'
import { toast } from 'react-toastify'
import { Grid, Paper } from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import AddIcon from '@mui/icons-material/Add'
import UITextField from '../../../components/UITextField/UITextField'
import UISelect from '../../../components/UISelect/UISelect'
import MenuItem from '@mui/material/MenuItem'
import { Div, InnerDiv } from '../../../components/UISelect/ui'
import userImage from '../../../assest/images/userImage.webp'

export const UserManage = () => {
  const [getUsers, users] = useUser()

  const [filteredUsers, setFilteredUsers] = useState([
    {
      image: userImage,
      email: "john@gmail.com",
      name: "john",
      phoneNumber: "34675634536",
      phone: "3476765",
      created_at: "12/9",
      status: false,
      id: 1

    }
  ])

  const handleStatus = (id, status) => {
    // const dataObj = {
    //   status: status == 1 ? 'inactive' : 'active',
    // }
    
  //   apiPut(
  //     `${ApiEndpoints.root}${ApiEndpoints.updateUser}${id}`,
  //     dataObj,
  //     (res) => {
  //       toast.success(res.message)
  //       getUsers()
  //     },
  //     (err) => {
  //       toast.error(err?.response?.data?.message)
  //     }
  //   )
  }

  // const handleSearch = (e) => {
  //   setFilteredUsers(() => {
  //     return users.filter((elm) => elm.name.toLowerCase().includes(e.target.value))
  //   })
  // }

  // useEffect(() => {
  //   getUsers()
  // }, [])

  // useEffect(() => {
  //   setFilteredUsers(users)
  // }, [users.length, users])

  // console.log('users', users)

  return (
    <>
      <Paper elevation={2} sx={{ borderRadius: '15px', padding: '30px' }}>
        <Grid container spacing={3} justifyContent='space-between'>
          <Grid item xs={12}>
            <UITypogrpahy type='subHeading' title='User Management' />
          </Grid>
          
          <Div>
              <InnerDiv>
                <UISelect label="Status" >
                  <MenuItem value={1}>active</MenuItem>
                  <MenuItem value={0}>Inactive</MenuItem>
                 
                </UISelect>
              </InnerDiv>
              <InnerDiv>
                {/* <UITextField label='Search' fullWidth handleChange={handleSearch} /> */}
                <UITextField label='Search' fullWidth />
              </InnerDiv>
          </Div>

          <Grid item xs={12}>
            <UsersTable users={filteredUsers} handleStatus={handleStatus} />
            
          </Grid>
        </Grid>

        

      </Paper>
    </>
  )
}
