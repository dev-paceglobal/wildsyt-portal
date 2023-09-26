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

  const handleEditContent = () => {
    const dataObj = {
      content: editorValue,
      name: pageName,
    }
    apiPut(
      `${ApiEndpoints.root}${ApiEndpoints.editContent}${id}`,
      dataObj,
      (res) => {
        toast.success(res.message)
        setIsEdit(false)
        getContent(id)
      },
      (err) => {
        toast.error(err.response.data.message)
      }
    )
  }

  useEffect(() => {
    getContent(id)
  }, [])

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={8}>
          <Paper elevation={3} sx={{borderRadius: '15px', padding: '30px'}}>
            {isEdit ? (
              <>
                <Grid container spacing={2} alignItems='center'>
                  <Grid item xs={1.5}>
                    <UITypogrpahy title={'Page Name:'} />
                  </Grid>
                  <Grid item xs={10}>
                    <UITextField
                      placeholder='Page name'
                      handleChange={(e) => setPageName(e.target.value)}
                      value={pageName}
                    />
                  </Grid>
                  <Grid item xs={1.5}>
                    <UITypogrpahy title={'Description:'} />
                  </Grid>
                  <Grid item xs={10}>
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
                      onClick={handleEditContent}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </>
            ) : (
              <Grid container spacing={2} alignItems='center'>
                <Grid item xs={1.5}>
                  <UITypogrpahy title={'Page Name:'} />
                </Grid>
                <Grid item xs={10}>
                  <UITypogrpahy type='subheading' title={content.name} />
                </Grid>
                <Grid item xs={1.5}>
                  <UITypogrpahy title={'Description:'} />
                </Grid>
                <Grid item xs={10}>
                  <div className='contentDiv' dangerouslySetInnerHTML={{__html: content.content}} />
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
