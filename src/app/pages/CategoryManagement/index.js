import React, {useEffect, useState} from 'react'
import {TablesWidget10} from '../../../_metronic/partials/widgets'
import {Grid} from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import CategoryTable from '../../../container/Category/CategoryTable'
import useCategory from '../../../hooks/useCateogory'
import {Paper} from '@mui/material'
import UIButton from '../../../components/UIButton/UIButton'
import AddIcon from '@mui/icons-material/Add'
import AddCategory from '../../../container/Category/AddCategory'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import {apiDelete, apiPost, apiPut} from '../../../apis/ApiRequest'
import {toast} from 'react-toastify'

const CategoryManagement = () => {
  const [getCategories, categories] = useCategory()

  const [isAdd, setIsAdd] = useState(false)

  const [addCategoryData, setAddCategoryData] = useState({
    name: '',
    description: '',
  })

  const handleInputChange = (e) => {
    setAddCategoryData({...addCategoryData, [e.target.name]: e.target.value})
  }

  const handleAddCategory = () => {
    const dataObj = {
      name: addCategoryData.name,
      description: addCategoryData.description,
      status: 1,
    }
    apiPost(
      `${ApiEndpoints.root}${ApiEndpoints.addCategory}`,
      dataObj,
      (res) => {
        toast.success(res.message)
        getCategories()
        setIsAdd(false)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  const handleStatus = (id, status) => {
    const dataObj = {
      status: status == 1 ? 'inactive' : 'active',
    }
    apiPut(
      `${ApiEndpoints.categories}/${id}`,
      dataObj,
      (res) => {
        console.log('res', res)
      },
      (err) => {
        console.log('err', err)
        toast.error(err?.response?.data?.message)
      }
    )
  }

  const handleDeleteCategory = (id) => {
    apiDelete(
      `${ApiEndpoints.root}${ApiEndpoints.deleteCategory}/${id}`,
      (res) => {
        toast.success(res.message)
        getCategories()
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Paper elevation={2} sx={{borderRadius: '15px', padding: '30px'}}>
        <Grid container spacing={2} justifyContent='space-between'>
          <Grid item xs={6}>
            <UITypogrpahy type='subHeading' title='Category Management' />
          </Grid>
          <Grid item xs={2}>
            {!isAdd && (
              <UIButton
                btnType='icon'
                variant='contained'
                label='Add Category'
                fullWidth
                iconPosition='start'
                icon={<AddIcon />}
                onClick={() => {
                  setIsAdd(true)
                }}
              />
            )}
          </Grid>
          {isAdd ? (
            <Grid item xs={12} mt={3}>
              <AddCategory
                setIsAdd={setIsAdd}
                handleInputChange={handleInputChange}
                addCategoryData={addCategoryData}
                setAddCategoryData={setAddCategoryData}
                handleAddCategory={handleAddCategory}
              />
            </Grid>
          ) : (
            <Grid item xs={12}>
              <CategoryTable
                categories={categories}
                handleDeleteCategory={handleDeleteCategory}
                handleStatus={handleStatus}
              />
            </Grid>
          )}
        </Grid>
      </Paper>
    </>
  )
}

export default CategoryManagement
