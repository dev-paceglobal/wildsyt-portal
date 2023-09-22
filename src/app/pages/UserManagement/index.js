import React, {useEffect} from 'react'
import {TablesWidget10} from '../../../_metronic/partials/widgets'
import UISwitch from '../../../components/UISwitch/UISwitch'
import UIButton from '../../../components/UIButton/UIButton'
import useUser from '../../../hooks/useUser'
import UsersTable from '../../../container/Users/UsersTable'
import {apiPut} from '../../../apis/ApiRequest'
import {ApiEndpoints} from '../../../apis/ApiEndpoints'
import {toast} from 'react-toastify'

export const UserManage = () => {
  const [getUsers, users] = useUser()

  useEffect(() => {
    getUsers()
  }, [])

  const handleStatus = (id, status) => {
    const dataObj = {
      status: status == 1 ? 'inactive' : 'active',
    }
    apiPut(
      `${ApiEndpoints.root}${ApiEndpoints.updateUser}${id}`,
      dataObj,
      (res) => {
        console.log('res', res)
        toast.success(res.message)
        getUsers()
      },
      (err) => {
        console.log('err', err)
      }
    )
  }

  return (
    <div className='col-xl-12'>
      {/* <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' btnName='Add User' /> */}
      <UsersTable users={users} handleStatus={handleStatus} />
    </div>
  )
}
