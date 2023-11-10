import React from 'react'
import { UIStyledSelect } from './ui'
import FormControl from '@mui/material/FormControl/FormControl'
import InputLabel from '@mui/material/InputLabel/InputLabel'

const UISelect = ({
    label, value, onChange, children, ...props
}) => {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <UIStyledSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={onChange}
                    {...props}
                >
                    {children}
                </UIStyledSelect>
            </FormControl>
        </>
    )
}

export default UISelect