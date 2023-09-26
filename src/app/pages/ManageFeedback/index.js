import React, {useEffect} from 'react'
import {TablesWidget10} from '../../../_metronic/partials/widgets'
import useFeedbacks from '../../../hooks/useFeedbacks'
import {Grid, Paper} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import UITextField from '../../../components/UITextField/UITextField'
import FeedbackTable from '../../../container/Feedback/FeedbackTable'

const ManageFeedback = () => {
  const [getAllFeedbacks, feedbacks] = useFeedbacks()

  useEffect(() => {
    getAllFeedbacks()
  }, [])

  return (
    <>
      <Paper elevation={2} sx={{borderRadius: '15px', padding: '30px'}}>
        <Grid container spacing={3} justifyContent='space-between'>
          <Grid item xs={12}>
            <UITypogrpahy type='subHeading' title='Feedbacks Management' />
          </Grid>
          <Grid item xs={3}>
            <UITextField
              label='Search'
              fullWidth
              // handleChange={handleSearch}
            />
          </Grid>

          <Grid item xs={12}>
            {feedbacks.length > 0 && (
              <FeedbackTable
                feedbacks={feedbacks}
                // handleStatus={handleStatus}
              />
            )}
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default ManageFeedback
