import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'
import {toast} from 'react-toastify'

export default function useContent() {
  const [content, setContent] = useState([])

  function getContents() {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.contents}`,
      (res) => {
        setContent(res.data.data)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  return [getContents, content]
}
