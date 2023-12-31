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
import UITextField from '../../../components/UITextField/UITextField'

const CategoryManagement = () => {
  const [getCategories, categories] = useCategory()

  const [isAdd, setIsAdd] = useState(false)

  const [addCategoryData, setAddCategoryData] = useState({
    name: '',
    description: '',
  })

  const [filteredCategory, setFilteredCategory] = useState([
    {
      name: "Leopard Gecko",
      description: "Category descriptions are meant to classify and describe the different types of products in your online shop. We are assuming that you have more than one specific product to offer. ",
      created_at : "12/03/2024",
      status: true,
      id: 1

    }
  ])

  // const handleInputChange = (e) => {
  //   setAddCategoryData({...addCategoryData, [e.target.name]: e.target.value})
  // }

  const handleAddCategory = () => {
    alert("Fill All Fields")
  }
  // const handleAddCategory = () => {
  //   const dataObj = {
  //     name: addCategoryData.name,
  //     description: addCategoryData.description,
  //     status: 1,
  //   }
  //   if (addCategoryData.name != '')
  //     apiPost(
  //       `${ApiEndpoints.root}${ApiEndpoints.addCategory}`,
  //       dataObj,
  //       (res) => {
  //         toast.success(res.message)
  //         getCategories()
  //         setIsAdd(false)
  //       },
  //       (err) => {
  //         toast.error(err?.response?.data?.message)
  //       }
  //     )
  //   else {
  //     toast.error('Name is required ')
  //   }
  // }

  // const handleStatus = (id, status) => {
  //   const dataObj = {
  //     status: status == 'active' ? 'inactive' : 'active',
  //   }
  //   apiPut(
  //     `${ApiEndpoints.root}${ApiEndpoints.categories}/${id}`,
  //     dataObj,
  //     (res) => {
  //       toast.success(res.message)
  //       getCategories()
  //     },
  //     (err) => {
  //       toast.error(err?.response?.data?.message)
  //     }
  //   )
  // }

  // const handleDeleteCategory = (id) => {
  //   apiDelete(
  //     `${ApiEndpoints.root}${ApiEndpoints.deleteCategory}/${id}`,
  //     (res) => {
  //       toast.success(res.message)
  //       getCategories()
  //     },
  //     (err) => {
  //       toast.error(err?.response?.data?.message)
  //     }
  //   )
  // }

  // const handleSearch = (e) => {
  //   setFilteredCategory(() => {
  //     return categories.filter((elm) => elm.name.toLowerCase().includes(e.target.value))
  //   })
  // }

  // useEffect(() => {
  //   getCategories()
  // }, [])

  // useEffect(() => {
  //   setFilteredCategory(categories)
  // }, [categories.length, categories])

  return (
    <>
      <Paper elevation={2} sx={{borderRadius: '15px', padding: '30px'}}>
        <Grid container spacing={2} justifyContent='space-between'>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={8}>
            <UITypogrpahy title='Category Management' />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
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
                // handleInputChange={handleInputChange}
                addCategoryData={addCategoryData}
                // setAddCategoryData={setAddCategoryData}
                handleAddCategory={handleAddCategory}
              />
            </Grid>
          ) : (
            <>
              <Grid item xs={6} md={3}>
                {/* <UITextField label='Search' fullWidth handleChange={handleSearch} /> */}
                <UITextField label='Search' fullWidth  />
              </Grid>
              <Grid item xs={12}>
                <CategoryTable
                  categories={filteredCategory}
                  // handleDeleteCategory={handleDeleteCategory}
                  // handleStatus={handleStatus}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Paper>
    </>
  )
}

export default CategoryManagement
