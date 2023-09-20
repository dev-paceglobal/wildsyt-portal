import React from 'react'
import {Controller} from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'

import {CountryListWrapper} from './ui'

const UICountryInput = ({name, value, control, errorMessage, ...rest}) => {
  return (
    <CountryListWrapper error={errorMessage}>
      <Controller
        name={name}
        control={control}
        render={({field}) => (
          <PhoneInput
            country={'us'}
            value={value}
            enableSearch={false}
            specialLabel=''
            {...rest}
            {...field}
            inputStyle={{borderRadius: '12px'}}
          />
        )}
      />
    </CountryListWrapper>
  )
}

export default UICountryInput
