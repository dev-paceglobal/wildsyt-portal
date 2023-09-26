/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import UIButton from '../../../../components/UIButton/UIButton'
import UITypogrpahy from '../../../../components/UITypography/UITypography'
import UITextField from '../../../../components/UITextField/UITextField'
import InputAdornment from '@mui/material/InputAdornment'
import {Box} from '@mui/material'

const StatisticsWidget1 = ({
  className,
  image,
  title,
  time,
  description,
  btnLabel,
  commission,
  isEdit,
  handleUpdate,
  setCommissionVal,
  ...props
}) => {
  return (
    <div
      className={`card bgi-no-repeat ${className}`}
      style={{
        backgroundPosition: 'right top',
        backgroundSize: '30% auto',
        backgroundImage: `url(${toAbsoluteUrl('/media/svg/shapes/' + image)})`,
      }}
    >
      {/* begin::Body */}
      <Box
        className='card-body'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: {xs: '100%', sm: '70%', md: '90%', lg: '50%'},
        }}
      >
        <UITypogrpahy type='subHeading' title='Commission' />

        {!isEdit ? (
          <UITypogrpahy
            title={commission}
            my={3}
            sx={{color: (theme) => theme.palette.primary.blue}}
          />
        ) : (
          <UITextField
            sx={{margin: '15px 0px'}}
            InputProps={{
              endAdornment: <InputAdornment position='end'>%</InputAdornment>,
            }}
            handleChange={(e) => setCommissionVal(e.target.value)}
          />
        )}

        <UIButton btnType='contained' label={btnLabel} onClick={handleUpdate} {...props} />
      </Box>
      {/* end::Body */}
    </div>
  )
}

export {StatisticsWidget1}
