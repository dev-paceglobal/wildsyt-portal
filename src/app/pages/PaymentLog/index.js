import React, { useState } from 'react'
import {TablesWidget10} from '../../../_metronic/partials/widgets'
import {Grid, Paper} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import UITextField from '../../../components/UITextField/UITextField'
import paymentUser from '../../../assest/images/happy-woman.jpg'
import PaymentLogsTable from '../../../container/PaymentLogs/PaymentLogs'


const PaymentLog = () => {

  const [filteredPayment, setFilteredPayment] = useState([
    {
      name: "Anna",
      image: paymentUser,
      email: "anna@gmail.com",
      product: "Pet A",
      status: false,
      id: 1

    }
  ])

  return (
    <>
      <Paper elevation={2} sx={{borderRadius: '15px', padding: '30px'}}>
        <Grid container spacing={3} justifyContent='space-between'>
          <Grid item xs={12}>
            <UITypogrpahy type='subHeading' title='Payment Logs' />
          </Grid>
          <Grid item xs={6} md={3}>
            {/* <UITextField label='Search' fullWidth handleChange={handleSearch} /> */}
            <UITextField label='Search' fullWidth />
          </Grid>

          <Grid item xs={12}>
            <PaymentLogsTable content={filteredPayment} />
          </Grid>
        </Grid>
      </Paper>
    </>
    
  )
}

export default PaymentLog
