import { TextField } from '@mui/material'
import React from 'react'

const UITextArea = ({ rows, maxRows }) => {
  return (
    <>
        <TextField
            placeholder="message"
            multiline
            rows={rows}
            maxRows={maxRows}
            fullWidth
            
        />
    </>
  )
}

export default UITextArea