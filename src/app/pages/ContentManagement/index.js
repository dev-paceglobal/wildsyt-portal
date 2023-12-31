import React, {useEffect, useState} from 'react'
import {TablesWidget10} from '../../../_metronic/partials/widgets'
import {UsersListWrapper} from '../../modules/apps/user-management/users-list/UsersList'
import useContent from '../../../hooks/useContent'
import {Grid, Paper} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import UITextField from '../../../components/UITextField/UITextField'
import ContentTable from '../../../container/ContentManagement/ContentTable'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import {toast} from 'react-toastify'
import {apiPut} from '../../../apis/ApiRequest'

const ContentManagement = () => {
  const [getContent, content] = useContent()

  const [filteredContent, setFilteredContent] = useState([
    {
      name: "About Page",
      email: "john@gmail.com",
      phoneNumber: "34675634536",
      status: false,
      id: 1

    }
  ])

  // const handleSearch = (e) => {
  //   setFilteredContent(() => {
  //     return content.filter((elm) => elm.name.toLowerCase().includes(e.target.value))
  //   })
  // }

  // const handleStatus = (id, status) => {
  //   const dataObj = {
  //     status: status == 'active' ? 'inactive' : 'active',
  //   }
  //   apiPut(
  //     `${ApiEndpoints.root}${ApiEndpoints.editContent}${id}`,
  //     dataObj,
  //     (res) => {
  //       toast.success(res.message)
  //       getContent()
  //     },
  //     (err) => {
  //       toast.error(err?.response?.data?.message)
  //     }
  //   )
  // }

  // useEffect(() => {
  //   getContent()
  // }, [])

  // useEffect(() => {
  //   setFilteredContent(content)
  // }, [content.length, content])

  return (
    <>
      <Paper elevation={2} sx={{borderRadius: '15px', padding: '30px'}}>
        <Grid container spacing={3} justifyContent='space-between'>
          <Grid item xs={12}>
            <UITypogrpahy type='subHeading' title='Content Management' />
          </Grid>
          <Grid item xs={6} md={3}>
            {/* <UITextField label='Search' fullWidth handleChange={handleSearch} /> */}
            <UITextField label='Search' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <ContentTable content={filteredContent} />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default ContentManagement
