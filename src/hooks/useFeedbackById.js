import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'
import {toast} from 'react-toastify'

export default function useFeedbackById() {
  const [feedback, setFeedback] = useState([])

  function getFeedback(id) {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.getFeedbacks}/${id}`,
      (res) => {
        setFeedback(res.data)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  return [getFeedback, feedback]
}
