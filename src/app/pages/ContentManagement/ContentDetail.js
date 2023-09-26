import {Grid, Paper} from '@mui/material'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import useContentById from '../../../hooks/useContentById'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './style.css'

const ContentDetail = () => {
  const {id} = useParams()

  const [getContent, content] = useContentById()

  const [value, setValue] = useState('')

  useEffect(() => {
    getContent(id)
  }, [])

  console.log('content', content)
  console.log('value', value)

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={8}>
          <Paper elevation={3} sx={{padding: '30px'}}>
            <ReactQuill theme='snow' value={value} onChange={setValue} />

            <div className='contentDiv' dangerouslySetInnerHTML={{__html: content.content}} />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default ContentDetail
