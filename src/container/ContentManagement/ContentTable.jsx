import React from 'react'
import UITable from '../../components/UITable'
import UITypogrpahy from '../../components/UITypography/UITypography'
import {IconButton, Paper} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import UISwitch from '../../components/UISwitch/UISwitch'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import {useNavigate} from 'react-router-dom'
import {pathLocations} from '../../utils/pathLocations'

const ContentTable = ({content, handleStatus}) => {
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
      name: <UITypogrpahy title='Page name' />,
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={row.name} />
      },
    },
    {
      name: <UITypogrpahy title='Status' textAlign='center' sx={{width: '100%'}} />,
      selector: (row) => row.phoneNumber,
      sortable: true,
      cell: (row) => {
        return (
          <UISwitch
            checked={row.status == 'active' ? true : false}
            onChange={() => {
              handleStatus(row?.id, row?.status)
            }}
          />
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

export default ContentTable
