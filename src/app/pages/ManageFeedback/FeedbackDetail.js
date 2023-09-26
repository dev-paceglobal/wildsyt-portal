import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import useFeedbackById from '../../../hooks/useFeedbackById'
import {Grid, Paper} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'

const FeedbackDetail = () => {
  const {id} = useParams()

  const [getFeedback, feedback] = useFeedbackById()

  useEffect(() => {
    getFeedback(id)
  }, [])

  console.log('feedback', feedback)

  return (
    <Grid container>
      <Grid item xs={8}>
        <Paper elevation={3} sx={{borderRadius: '15px', padding: '30px'}}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <UITypogrpahy type='subheading' title='Name:' />
            </Grid>
            <Grid item xs={10}>
              <UITypogrpahy title={feedback?.full_name} />
            </Grid>
            <Grid item xs={2}>
              <UITypogrpahy type='subheading' title='Email:' />
            </Grid>
            <Grid item xs={10}>
              <UITypogrpahy title={feedback?.email} />
            </Grid>
            <Grid item xs={2}>
              <UITypogrpahy type='subheading' title='Subject:' />
            </Grid>
            <Grid item xs={10}>
              <UITypogrpahy title={feedback?.subject} />
            </Grid>
            <Grid item xs={2}>
              <UITypogrpahy type='subheading' title='Date:' />
            </Grid>
            <Grid item xs={10}>
              <UITypogrpahy title={feedback?.created_at} />
            </Grid>
            <Grid item xs={2}>
              <UITypogrpahy type='subheading' title='Message:' />
            </Grid>
            <Grid item xs={10}>
              <UITypogrpahy title={feedback?.message} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default FeedbackDetail
