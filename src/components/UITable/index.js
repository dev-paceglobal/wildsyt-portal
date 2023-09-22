import {Box} from '@mui/material'
import React from 'react'
import DataTable from 'react-data-table-component'
import {useSelector} from 'react-redux'

const UITable = ({columns, data, selectableRows, pagination, ...props}) => {
  const customStyles = {
    headRow: {
      style: {
        padding: 0,
        backgroundColor: 'white !important',
        borderBottomWidth: '0.2px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#DBDFE9',
      },
    },
    headCells: {
      style: {
        padding: 0,
        color: 'white !important',
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent !important',
        '&:nth-child(1)': {paddingLeft: '8px'},
      },
    },
    cells: {
      style: {
        padding: 10,
        display: 'flex',
        fontSize: '15px',
        justifyContent: 'flex-start',
        '&:nth-child(1)': {paddingLeft: '8px'},
        borderBottomWidth: '0.2px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#DBDFE9',
      },
    },
    rows: {
      style: {
        backgroundColor: 'white !important',
        color: 'white !important',
        '&:nth-child': {
          borderTop: '0.5px solid rgba(0, 0, 0, .12)',
          marginTop: '8px',
        },
      },
    },
    table: {
      style: {
        borderRadius: '10px',
        padding: '30px',
        backgroundColor: 'white !important',
      },
    },
    pagination: {
      style: {
        border: 'none',
        backgroundColor: 'transparent !important',
        color: '#0D0D0D !important',
        '& > .sc-brSOsn > button > svg': {
          fill: '#0D0D0D !important',
        },
      },
    },
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      selectableRows={selectableRows}
      customStyles={customStyles}
      pagination={pagination}
      {...props}
    />
  )
}

export default UITable
