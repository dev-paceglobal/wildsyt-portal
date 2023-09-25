import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'

export default function useCategoryDetail() {
  const [category, setCategory] = useState([])

  function getCategory(id) {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.categories}/${id}`,
      (res) => {
        console.log('res', res)
        setCategory(res.data)
      },
      (err) => {
        console.log('err', err)
      }
    )
  }

  return [getCategory, category]
}
