/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import UIButton from '../../../../components/UIButton/UIButton'
import UITypogrpahy from '../../../../components/UITypography/UITypography'
import UITextField from '../../../../components/UITextField/UITextField'
import InputAdornment from '@mui/material/InputAdornment'

const StatisticsWidget1 = ({
  className,
  image,
  title,
  time,
  description,
  btnLabel,
  commission,
  isEdit,
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
      <div className='card-body' style={{display: 'flex', flexDirection: 'column', width: '40%'}}>
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
          />
        )}

        <UIButton btnType='contained' label={btnLabel} {...props} />
      </div>
      {/* end::Body */}
    </div>
  )
}

export {StatisticsWidget1}
