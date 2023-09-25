import React, {useEffect} from 'react'
import {TablesWidget10} from '../../../_metronic/partials/widgets'
import {UsersListWrapper} from '../../modules/apps/user-management/users-list/UsersList'
import useContent from '../../../hooks/useContent'
import {Grid, Paper} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import UITextField from '../../../components/UITextField/UITextField'
import ContentTable from '../../../container/ContentManagement/ContentTable'

const ContentManagement = () => {
  const [getContent, content] = useContent()

  useEffect(() => {
    getContent()
  }, [])

  console.log('content', content)

  return (
    <>
      <Paper elevation={2} sx={{borderRadius: '15px', padding: '30px'}}>
        <Grid container spacing={3} justifyContent='space-between'>
          <Grid item xs={12}>
            <UITypogrpahy type='subHeading' title='User Management' />
          </Grid>
          <Grid item xs={3}>
            <UITextField
              label='Search'
              fullWidth
              // handleChange={handleSearch}
            />
          </Grid>

          <Grid item xs={12}>
            <ContentTable
              content={content}
              //  handleStatus={handleStatus}
            />
          </Grid>
        </Grid>
      </Paper>{' '}
      {/* {content?.map((item) => {
        return <div dangerouslySetInnerHTML={{__html: item.content}} />
      })} */}
    </>
  )
}

export default ContentManagement
