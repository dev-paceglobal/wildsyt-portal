import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'
import { toast } from 'react-toastify'

export default function useCategoryDetail() {
  const [category, setCategory] = useState([])

  function getCategory(id) {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.categories}/${id}`,
      (res) => {
        setCategory(res.data)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  return [getCategory, category]
}
