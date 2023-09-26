import React from 'react'
import UITable from '../../components/UITable'
import {useNavigate} from 'react-router-dom'
import UITypogrpahy from '../../components/UITypography/UITypography'
import {IconButton} from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import {pathLocations} from '../../utils/pathLocations'

const FeedbackTable = ({feedbacks}) => {
  const navigate = useNavigate()
  const columns = [
    {
      name: <UITypogrpahy title='S.No' />,
      //   sortable: true,
      cell: (row, i) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={i + 1} />
      },
      width: '80px',
    },
    {
      name: <UITypogrpahy title='Name' />,
      selector: (row) => row.full_name,
      sortable: true,
      cell: (row) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={row.full_name} />
      },
    },
    {
      name: <UITypogrpahy title='Email' />,
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={row.email} />
      },
    },
    {
      name: <UITypogrpahy title='Date' />,
      selector: (row) => row.created_at,
      sortable: true,
      cell: (row) => {
        return <UITypogrpahy sx={{fontSize: '13px'}} title={row.created_at} />
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
              navigate(`${pathLocations.manageFeedback}/${row.id}`)
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
      data={feedbacks}
      pagination={true}
      paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
      paginationPerPage={10}
      paginationComponentOptions={paginationComponentOptions}
    />
  )
}

export default FeedbackTable
