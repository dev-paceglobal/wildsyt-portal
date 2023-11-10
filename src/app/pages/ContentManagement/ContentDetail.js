import {Grid, Paper} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import useContentById from '../../../hooks/useContentById'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './style.css'
import UIButton from '../../../components/UIButton/UIButton'
import {apiPut} from '../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import UITypogrpahy from '../../../components/UITypography/UITypography'
import UITextField from '../../../components/UITextField/UITextField'
import {toast} from 'react-toastify'

const ContentDetail = () => {
  const {id} = useParams()

  const [getContent, content] = useContentById()

  const [editorValue, setEditorValue] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [pageName, setPageName] = useState('')

  // const handleEditContent = () => {
  //   const dataObj = {
  //     content: editorValue,
  //     name: pageName,
  //   }
  //   apiPut(
  //     `${ApiEndpoints.root}${ApiEndpoints.editContent}${id}`,
  //     dataObj,
  //     (res) => {
  //       toast.success(res.message)
  //       setIsEdit(false)
  //       getContent(id)
  //     },
  //     (err) => {
  //       toast.error(err.response.data.message)
  //     }
  //   )
  // }

  // useEffect(() => {
  //   getContent(id)
  // }, [])

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={12} lg={8}>
          <Paper elevation={3} sx={{borderRadius: '15px', padding: {xs: 4, lg: '30px'}}}>
            {isEdit ? (
             
                <Grid container spacing={2}>
                  <Grid item xs={4} lg={2}>
                    <UITypogrpahy title={'Page Name:'} />
                  </Grid>
                  <Grid item xs={8} lg={10}>
                    <UITextField
                      placeholder='Page name'
                      handleChange={(e) => setPageName(e.target.value)}
                      value={pageName}
                    />
                  </Grid>
                  <Grid item xs={12} md={4} lg={1.5}>
                    <UITypogrpahy title={'Description:'} />
                  </Grid>
                  <Grid item xs={12} md={8} lg={10}>
                    <ReactQuill
                      theme='snow'
                      value={editorValue}
                      onChange={setEditorValue}
                      className='quillEditor'
                    />
                  </Grid>
                  <Grid item xs={1.5}></Grid>
                  <Grid item xs={3}>
                    <UIButton
                      btnType='contained'
                      label='Update'
                      // onClick={handleEditContent}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              
            ) : (
              <Grid container spacing={2}>
                <Grid item xs={5} sm={3} md={4} lg={3} xl={2}>
                  <UITypogrpahy title={'Page Name:'} />
                </Grid>
                <Grid item xs={6} sm={9} md={8} lg={9} xl={10}>
                  {/* <UITypogrpahy type='subheading' title={content.name} /> */}
                  <UITypogrpahy type='subheading' title="About Page" />
                </Grid>
                <Grid item xs={12} sm={3} md={4} lg={3} xl={1.5}>
                  <UITypogrpahy title={'Description:'} />
                </Grid>
                <Grid item xs={12} sm={9} md={8} lg={9} xl={10}>
                  {/* <div className='contentDiv' dangerouslySetInnerHTML={{__html: content.content}} /> */}
                  <div className='contentDiv' dangerouslySetInnerHTML={{__html: "The about us page is often a reflection of the purpose and personality of the business and its owners or top employees. Finally, the page can also incorporate contact or locational information. One way to view the about us concept is as a text self-portrait or short autobiography created by a business."}} />
                </Grid>
                <Grid item xs={1.5}></Grid>
                <Grid item xs={3}>
                  <UIButton
                    btnType='contained'
                    label='Edit'
                    onClick={() => {
                      setPageName(content.name)
                      setEditorValue(content.content)
                      setIsEdit(true)
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default ContentDetail
