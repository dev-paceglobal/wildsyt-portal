import React from 'react'
import {TablesWidget10} from '../../../_metronic/partials/widgets'
import UISwitch from '../../../components/UISwitch/UISwitch'
import UIButton from '../../../components/UIButton/UIButton'

export const UserManage = () => {
  return (
    <div className='col-xl-12'>
      <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      <UISwitch />
      <UIButton btnType='contained' label='Save' />
      <UIButton btnType='outlined' label='Save' />
      <UIButton btnType='' label='Save' />
    </div>
  )
}
