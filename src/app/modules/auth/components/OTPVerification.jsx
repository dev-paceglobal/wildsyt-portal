import React, {useState} from 'react'
import {Grid} from '@mui/material'
import UITypogrpahy from '../../../../components/UITypography/UITypography'
import UITextField from '../../../../components/UITextField/UITextField'
import UIButton from '../../../../components/UIButton/UIButton'
import {apiPost} from '../../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../../apis/ApiEndpoints'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {resetPasswordData} from '../../../../store/resetPasswordSlice'

const OTPVerification = () => {
  const [otp, setOtp] = useState('')

  const dispatch = useDispatch()

  const resetPasswordReducer = useSelector((state) => state?.resetData)
  

  const navigate = useNavigate()

  const handleEmailVerification = () => {
    const dataObj = {
      otp: otp,
    }
    if (otp.length != 6) {
      toast.error('OTP is invalid')
    } else {
      // apiPost(
      //   `${ApiEndpoints.root}${ApiEndpoints.verifyOtp}`,
      //   dataObj,
      //   (res) => {
      //     toast.success(res.message)
      //     navigate('/auth/reset-password')
      //     dispatch(resetPasswordData({email: resetPasswordReducer.email, otp: otp}))
      //   },
      //   (err) => {
      //     toast.error(err?.response?.data?.message)
      //   }
      // )
    }
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UITypogrpahy type='heading' title='OTP Verification' />
          <UITypogrpahy title='Check you email for otp code' />
        </Grid>
        <Grid item xs={12}>
          <UITextField isOtp={true} onChange={setOtp} value={otp} fullWidth otp={otp} />
        </Grid>
        <Grid item xs={12}>
          <UIButton
            btnType='contained'
            label='Continue'
            fullWidth
            onClick={handleEmailVerification}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default OTPVerification
