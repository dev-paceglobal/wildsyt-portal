import React from 'react'
import UITable from '../../components/UITable'
import UITypogrpahy from '../../components/UITypography/UITypography'
import {IconButton, Paper} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import UISwitch from '../../components/UISwitch/UISwitch'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import {useNavigate} from 'react-router-dom'
import {pathLocations} from '../../utils/pathLocations'


const UsersTable = ({users, handleStatus}) => {
  const navigate = useNavigate()
  const columns = [
    {
      name: <UITypogrpahy title='User' />,
      sortable: true,
      cell: (row, i) => {
        return (
          <img sx={{fontSize: '13px'}} src={row.image} height={30} style={{borderRadius: '10px'}} />
          // <img sx={{fontSize: '13px'}} src={userData} height={30} style={{borderRadius: '10px'}} />
        )
      },
    },
    {
      name: <UITypogrpahy title='User name' />,
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={row.name} />
      },
    },
    {
      name: <UITypogrpahy title='Email' />,
      selector: (row) => row.phoneNumber,
      sortable: true,
      cell: (row) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={row.email} />
      },
    },
    {
      name: <UITypogrpahy title='Phone Number' />,
      selector: (row) => row.phoneNumber,
      sortable: true,
      cell: (row) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={row.phone} />
      },
    },
    {
      name: <UITypogrpahy title='Registeration Date' />,
      selector: (row) => row.phoneNumber,
      sortable: true,
      cell: (row) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={row.created_at} />
      },
    },
    {
      name: <UITypogrpahy title='Status' textAlign='center' sx={{width: '100%'}} />,
      selector: (row) => row.phoneNumber,
      sortable: true,
      cell: (row) => {
        return (
          <UISwitch
            checked={row.status == 1 ? true : false}
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
              navigate(`${pathLocations.userManagement}/${row.id}`)
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
  const paginationComponentOptions = {
    // rowsPerPageText: 'Filas por página',
    // rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
  }
  return (
    <UITable
      columns={columns}
      data={users}
      pagination={true}
      paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
      paginationPerPage={10}
      paginationComponentOptions={paginationComponentOptions}
    />
  )
}

export default UsersTable
