import React from 'react'
import {UIStyledSwitch} from './ui'

const UISwitch = ({defaultChecked, ...props}) => {
  return <UIStyledSwitch defaultChecked={defaultChecked} {...props} />
}

export default UISwitch
