import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import useFeedbackById from '../../../hooks/useFeedbackById'
import {Grid, Paper} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'

const FeedbackDetail = () => {
  const {id} = useParams()

  const [getFeedback, feedback] = useFeedbackById()

  // useEffect(() => {
  //   getFeedback(id)
  // }, [])

  // console.log('feedback', feedback)

  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} sx={{borderRadius: '15px', padding: '30px'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <UITypogrpahy type='subheading' title='Name:' />
            </Grid>
            <Grid item xs={12} md={10}>
              {/* <UITypogrpahy title={feedback?.full_name} /> */}
              <UITypogrpahy title="Jason Roy" />
            </Grid>
            <Grid item xs={12} md={2}>
              <UITypogrpahy type='subheading' title='Email:' />
            </Grid>
            <Grid item xs={12} md={10}>
              {/* <UITypogrpahy title={feedback?.email} /> */}
              <UITypogrpahy title="jasonroy@gmail.com" />
            </Grid>
            <Grid item xs={12} md={2}>
              <UITypogrpahy type='subheading' title='Subject:' />
            </Grid>
            <Grid item xs={12} md={10}>
              {/* <UITypogrpahy title={feedback?.subject} /> */}
              <UITypogrpahy title="subject" />
            </Grid>
            <Grid item xs={12} md={2}>
              <UITypogrpahy type='subheading' title='Date:' />
            </Grid>
            <Grid item xs={12} md={10}>
              {/* <UITypogrpahy title={feedback?.created_at} /> */}
              <UITypogrpahy title="12/9/2024" />
            </Grid>
            <Grid item xs={12} md={2}>
              <UITypogrpahy type='subheading' title='Message:' />
            </Grid>
            <Grid item xs={12} md={10}>
              {/* <UITypogrpahy title={feedback?.message} /> */}
              <UITypogrpahy title="The nature of your product determines the optimal way of collecting feedback. Check out these creative ideas that can inspire you to collect feedback and boost the metrics that are most important to you." />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default FeedbackDetail
