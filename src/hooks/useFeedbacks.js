import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'
import {toast} from 'react-toastify'

export default function useFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([])

  function getAllFeedbacks() {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.getFeedbacks}`,
      (res) => {
        setFeedbacks(res.data.data)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  return [getAllFeedbacks, feedbacks]
}
