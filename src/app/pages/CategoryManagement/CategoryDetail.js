import React, {useEffect, useState} from 'react'
import {Grid, Paper} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import {useParams} from 'react-router-dom'
import useCategoryDetail from '../../../hooks/useCategoryDetail'
import UIButton from '../../../components/UIButton/UIButton'
import EditCategory from '../../../container/Category/EditCategory'
import {apiPut} from '../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import {toast} from 'react-toastify'

const CategoryDetail = () => {
  const {id} = useParams()

  const [isEdit, setIsEdit] = useState(false)

  const [getCategory, category] = useCategoryDetail()

  const [addCategoryData, setAddCategoryData] = useState({
    name: '',
    status: false,
  })

  const handleSwitchChange = (e) => {
    setAddCategoryData({...addCategoryData, status: e.target.checked})
  }

  const handleInputChange = (e) => {
    setAddCategoryData({...addCategoryData, [e.target.name]: e.target.value})
  }

  const handleUpdateCategory = () => {
    alert("Fill All Fields")
  }
  // const handleUpdateCategory = () => {
  //   const dataObj = {
  //     name: addCategoryData.name,
  //     description: category.description,
  //     status: addCategoryData.status ? 'active' : 'inactive',
  //   }
  //   apiPut(
  //     `${ApiEndpoints.root}${ApiEndpoints.updateCategory}/${id}`,
  //     dataObj,
  //     (res) => {
  //       toast.success(res.message)
  //       getCategory(id)
  //     },
  //     (err) => {
  //       toast.error(err?.response?.data?.message)
  //     }
  //   )
  // }

  // useEffect(() => {
  //   getCategory(id)
  // }, [])

  return (
    <Paper elevation={3} sx={{borderRadius: '15px', padding: '30px'}}>
      <Grid container>
        <Grid item xs={12}>
          <UITypogrpahy
            type='heading'
            title='Category Detail'
            sx={{fontSize: '30px !important', color: (theme) => theme.palette.primary.grey1}}
          />
        </Grid>
      </Grid>
      {isEdit ? (
        <EditCategory
          category={category}
          setIsEdit={setIsEdit}
          addCategoryData={addCategoryData}
          handleSwitchChange={handleSwitchChange}
          handleInputChange={handleInputChange}
          handleUpdateCategory={handleUpdateCategory}
        />
      ) : (
        <Grid container spacing={3} mt={2}>
          <Grid item xs={2}>
            <UITypogrpahy title='Name:' />
          </Grid>
          <Grid item xs={10}>
            {/* <UITypogrpahy title={category.name} /> */}
            <UITypogrpahy title="Leopard Gecko" />
          </Grid>
          <Grid item xs={2}>
            <UITypogrpahy title='Status:' />
          </Grid>
          <Grid item xs={10}>
            {/* <UITypogrpahy title={category.status} /> */}
            <UITypogrpahy title="true" />
          </Grid>
          <Grid item xs={2}>
            <UITypogrpahy title='Date:' />
          </Grid>
          <Grid item xs={10}>
            {/* <UITypogrpahy title={category.created_at} /> */}
            <UITypogrpahy title="12/03/2024" />
          </Grid>
          <Grid item xs={2}>
            <UITypogrpahy title='No of Listing:' />
          </Grid>
          <Grid item xs={10}>
            <UITypogrpahy title='10' />
          </Grid>
          <Grid item lg={1.5}>
            <UIButton
              btnType='contained'
              label='Edit'
              fullWidth
              onClick={() => {
                setIsEdit(true)
                setAddCategoryData({
                  name: category.name,
                  status: category.status === 'active' ? true : false,
                })
              }}
            />
          </Grid>
        </Grid>
      )}
    </Paper>
  )
}

export default CategoryDetail
