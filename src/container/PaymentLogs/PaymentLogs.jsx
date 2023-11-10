import React from 'react'
import {Grid, IconButton, Paper} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import {useNavigate} from 'react-router-dom'

import { pathLocations } from '../../utils/pathLocations'
import UITypogrpahy from '../../components/UITypography/UITypography'
import UISwitch from '../../components/UISwitch/UISwitch'
import UITable from '../../components/UITable'

const PaymentLogsTable = ({content, handleStatus}) => {
  const navigate = useNavigate()
  const columns = [
    {
      name: <UITypogrpahy title='S.No' />,

      sortable: true,
      cell: (row, i) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={i + 1} />
      },
      width: '80px',
    },
    {
      name: <UITypogrpahy title='Name' />,
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => {
        return (
                <UITypogrpahy sx={{fontSize: '13px'}} title={row.name} />
        )
      },
    },
    {
      name: <UITypogrpahy title='Image' />,
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => {
        return (
            <img src={row.image} height={50} width={50} style={{borderRadius: '100%'}} />
        )
      },
    },
    {
      name: <UITypogrpahy title='Product' textAlign='center' sx={{width: '100%'}} />,
      selector: (row) => row.product,
      sortable: true,
      cell: (row) => {
        return (
            <UITypogrpahy sx={{fontSize: '13px'}} title={row.product} />
        )
      },
      style: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    {
      name: <UITypogrpahy title='Actions' textAlign='center' sx={{width: '100%'}} />,

      style: {
        display: 'flex',
        justifyContent: 'center',
      },
      cell: (row) => (
        <>
          <IconButton
            onClick={() => {
              //   setSelectedId(row?._id)
              //   setModalOpen(true)
              //   setAnchorEl(null)
              navigate(`${pathLocations.contentManagement}/${row.id}`)
            }}
          >
            <RemoveRedEyeIcon
              sx={{
                color: (theme) => theme.palette.primary.main,
                '&:hover': {
                  //   color: (theme) => theme.palette.indicators.main,
                },
              }}
            />
          </IconButton>
          {/* <IconButton
            onClick={() => {
              //   setSelectedId(row?._id)
              //   setModalOpen(true)
              //   setAnchorEl(null)
            }}
          >
            <DeleteIcon
              sx={{
                color: (theme) => theme.palette.indicators.main,
                '&:hover': {
                  //   color: (theme) => theme.palette.indicators.main,
                },
              }}
            />
          </IconButton> */}
        </>
      ),
    },
  ]
  return <UITable columns={columns} data={content} pagination={true} />
}

export default PaymentLogsTable
