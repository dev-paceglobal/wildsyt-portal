import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'
import {toast} from 'react-toastify'

export default function useCommision() {
  const [commissions, setCommissions] = useState([])

  function getCommissions() {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.getComission}`,
      (res) => {
        setCommissions(res.data)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  return [getCommissions, commissions]
}
