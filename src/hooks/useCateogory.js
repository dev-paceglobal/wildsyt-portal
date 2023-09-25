import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'

export default function useCategory() {
  const [categories, setCategories] = useState([])

  function getCategories() {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.categories}`,
      (res) => {
        console.log('res', res)
        setCategories(res.data.data)
      },
      (err) => {
        console.log('err', err)
      }
    )
  }

  return [getCategories, categories]
}
