import React, {useEffect, useState} from 'react'
import {Grid, Paper} from '@mui/material'
import UITextField from '../../components/UITextField/UITextField'
import UISwitch from '../../components/UISwitch/UISwitch'
import UIButton from '../../components/UIButton/UIButton'
import UITypogrpahy from '../../components/UITypography/UITypography'
import {useNavigate} from 'react-router-dom'
import {pathLocations} from '../../utils/pathLocations'

const EditCategory = ({
  category,
  setIsEdit,
  addCategoryData,
  handleSwitchChange,
  handleInputChange,
  handleUpdateCategory,
}) => {
  const navigate = useNavigate()
  return (
    <>
      <Grid container spacing={3} mt={2}>
        <Grid item xs={2}>
          <UITypogrpahy title='Name:' />
        </Grid>
        <Grid item xs={3}>
          <UITextField
            label='Name'
            fullWidth
            value={addCategoryData.name}
            name='name'
            handleChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container mt={2} spacing={2}>
        <Grid item xs={2}>
          <UITypogrpahy title='Status:' />
        </Grid>
        <Grid item xs={10}>
          <UISwitch defaultChecked={addCategoryData.status} onChange={handleSwitchChange} />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item lg={1.5}>
          <UIButton
            btnType='contained'
            label='Update'
            fullWidth
            onClick={() => {
              handleUpdateCategory()
              setIsEdit(false)
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default EditCategory
