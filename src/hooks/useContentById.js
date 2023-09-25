import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'
import {toast} from 'react-toastify'

export default function useContentById() {
  const [content, setContent] = useState([])

  function getContent(id) {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.contents}/${id}`,
      (res) => {
        setContent(res.data)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  return [getContent, content]
}
