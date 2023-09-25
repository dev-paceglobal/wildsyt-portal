import {Grid} from '@mui/material'
import React, {useState} from 'react'
import UITextField from '../../components/UITextField/UITextField'
import UITypogrpahy from '../../components/UITypography/UITypography'
import UISwitch from '../../components/UISwitch/UISwitch'
import UIButton from '../../components/UIButton/UIButton'
import {apiPost} from '../../apis/ApiRequest'
import {ApiEndpoints} from '../../apis/ApiEndpoints'
import {toast} from 'react-toastify'
import useCategory from '../../hooks/useCateogory'

const AddCategory = ({
  setIsAdd,
  handleAddCategory,
  setAddCategoryData,
  addCategoryData,
  handleInputChange,
}) => {
  const [getCategories] = useCategory()

  return (
    <>
      <Grid container alignItems='center'>
        <Grid item xs={2}>
          <UITypogrpahy title='Name:' />
        </Grid>
        <Grid item xs={3}>
          <UITextField label='Name' fullWidth name='name' handleChange={handleInputChange} />
        </Grid>
      </Grid>
      <Grid container mt={2} spacing={2} alignItems='center'>
        <Grid item xs={2}>
          <UITypogrpahy title='Description:' />
        </Grid>
        <Grid item xs={3}>
          <UITextField
            label='Description'
            fullWidth
            name='description'
            handleChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Grid container mt={3}>
        <Grid item xs={2}></Grid>
        <Grid item lg={1.5}>
          <UIButton
            btnType='contained'
            label='Add'
            fullWidth
            onClick={() => {
              handleAddCategory()
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default AddCategory
