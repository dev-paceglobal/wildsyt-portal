import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'
import { toast } from 'react-toastify'

export default function useCategory() {
  const [categories, setCategories] = useState([])

  function getCategories() {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.categories}`,
      (res) => {
        setCategories(res.data.data)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  return [getCategories, categories]
}
