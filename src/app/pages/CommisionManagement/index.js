import React, {useState} from 'react'
import {StatisticsWidget1} from '../../../_metronic/partials/widgets'
import {Grid} from '@mui/material'

const CommissionManagement = () => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={4}>
          <StatisticsWidget1
            className='card-xl-stretch mb-xl-8'
            image='abstract-4.svg'
            title='Meeting Schedule'
            time='3:30PM - 4:20PM'
            description='Create a headline that is informative<br/>and will capture readers'
            commission='15%'
            btnLabel={isEdit ? 'Update' : 'Edit'}
            onClick={() => setIsEdit(!isEdit)}
            isEdit={isEdit}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default CommissionManagement
