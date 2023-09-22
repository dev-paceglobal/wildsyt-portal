import React, {useEffect, useState} from 'react'
import {apiGet} from '../apis/ApiRequest'
import {ApiEndpoints} from '../apis/ApiEndpoints'

export default function useUser() {
  const [users, setUsers] = useState([])

  function getUsers() {
    apiGet(
      `${ApiEndpoints.root}${ApiEndpoints.users}`,
      (res) => {
        console.log('res', res)
        setUsers(res.data.data)
      },
      (err) => {
        console.log('err', err)
      }
    )
  }

  return [getUsers, users]
}
