import React, {useEffect, useState} from 'react'
import {StatisticsWidget1} from '../../../_metronic/partials/widgets'
import {Grid} from '@mui/material'
import useCommision from '../../../hooks/useCommision'
import {apiPost} from '../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import {toast} from 'react-toastify'

const CommissionManagement = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [getCommissions, commissions] = useCommision()

  const [commissionVal, setCommissionVal] = useState('')

  // useEffect(() => {
  //   getCommissions()
  // }, [])

  // const editCommission = () => {
  //   const dataObj = {
  //     platform_comission: commissionVal,
  //   }
  //   apiPost(
  //     `${ApiEndpoints.root}${ApiEndpoints.updateCommission}`,
  //     dataObj,
  //     (res) => {
  //       toast.success(res?.message)
  //       setIsEdit(false)
  //       getCommissions()
  //     },
  //     (err) => {
  //       toast.error(err.response.data.message)
  //     }
  //   )
  // }
  
  return (
    <div>
      <Grid container>
        {/* {commissions?.map((item, i) => {
          return ( */}
            <Grid item xs={12} md={4}>
              <StatisticsWidget1
                className='card-xl-stretch mb-xl-8'
                // commission={`${item.value}%`}
                commission={`10%`}
                btnLabel={isEdit ? 'Update' : 'Edit'}
                isEdit={isEdit}
                handleUpdate={() => (setIsEdit(true))}
                setCommissionVal={setCommissionVal}
              />
            </Grid>
           {/* )
         })} */}
      </Grid>
    </div>
  )
}

export default CommissionManagement
