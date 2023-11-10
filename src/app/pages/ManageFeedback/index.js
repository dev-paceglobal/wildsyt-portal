import React, {useEffect, useState} from 'react'
import {TablesWidget10} from '../../../_metronic/partials/widgets'
import useFeedbacks from '../../../hooks/useFeedbacks'
import {Grid, Paper} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import UITextField from '../../../components/UITextField/UITextField'
import FeedbackTable from '../../../container/Feedback/FeedbackTable'

const ManageFeedback = () => {
  const [getAllFeedbacks, feedbacks] = useFeedbacks()

  const [filteredFeedback, setFilteredFeedback] = useState([
    {
      email: "jasonroy@gmail.com",
      full_name: "Jason Roy",
      phoneNumber: "34675634536",
      message: "The nature of your product determines the optimal way of collecting feedback. Check out these creative ideas that can inspire you to collect feedback and boost the metrics that are most important to you.",
      created_at: "12/9/2024",
      status: false,
      id: 1

    }
  ])

  // const handleSearch = (e) => {
  //   setFilteredFeedback(() => {
  //     return feedbacks.filter((elm) => elm.full_name.toLowerCase().includes(e.target.value))
  //   })
  // }

  // useEffect(() => {
  //   getAllFeedbacks()
  // }, [])

  // useEffect(() => {
  //   setFilteredFeedback(feedbacks)
  // }, [feedbacks.length, feedbacks])

  return (
    <>
      <Paper elevation={2} sx={{borderRadius: '15px', padding: '30px'}}>
        <Grid container spacing={3} justifyContent='space-between'>
          <Grid item xs={12}>
            <UITypogrpahy type='subHeading' title='Feedbacks Management' />
          </Grid>
          <Grid item xs={6} md={3} >
            {/* <UITextField label='Search' fullWidth handleChange={handleSearch} /> */}
            <UITextField label='Search' fullWidth />
          </Grid>

          <Grid item xs={12}>
            {/* {feedbacks.length > 0 && ( */}
              <FeedbackTable
                feedbacks={filteredFeedback}
                // handleStatus={handleStatus}
              />
            {/* )} */}
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default ManageFeedback
