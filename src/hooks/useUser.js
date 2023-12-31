import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'
import {toast} from 'react-toastify'

export default function useUser() {
  const [users, setUsers] = useState([])

  function getUsers() {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.users}`,
      (res) => {
        setUsers(res.data.data)
      },
      (err) => {
        toast.error(err?.response?.data?.message)
      }
    )
  }

  return [getUsers, users]
}
