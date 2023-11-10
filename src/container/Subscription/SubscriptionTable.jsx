import React from 'react'
import UITable from '../../components/UITable'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import {IconButton, Paper} from '@mui/material'
import UITypogrpahy from '../../components/UITypography/UITypography'
import UISwitch from '../../components/UISwitch/UISwitch'
import { pathLocations } from '../../utils/pathLocations'
import {useNavigate} from 'react-router-dom'


const SubscriptionTable = ({subscription, handleStatus}) => {
    const navigate = useNavigate();
    const columns = [
        
        {
          name: <UITypogrpahy title='S.No' />,
          selector: (row) => row.id,
          sortable: true,
          cell: (row) => {
            return <UITypogrpahy sx={{fontSize: '13px'}} title={row.id} />
          },
        },
        {
          name: <UITypogrpahy title='Package Name' />,
          selector: (row) => row.package,
          sortable: true,
          cell: (row) => {
            return <UITypogrpahy sx={{fontSize: '13px'}} title={row.package} />
          },
        },
        {
          name: <UITypogrpahy title='Type' />,
          selector: (row) => row.type,
          sortable: true,
          cell: (row) => {
            return <UITypogrpahy sx={{fontSize: '13px'}} title={row.type} />
          },
        },
        {
          name: <UITypogrpahy title='Price' />,
          selector: (row) => row.price,
          sortable: true,
          cell: (row) => {
            return <UITypogrpahy sx={{fontSize: '13px'}} title={row.price} />
          },
        },
        {
          name: <UITypogrpahy title='Status' textAlign='center' sx={{width: '100%'}} />,
          selector: (row) => row.status,
          sortable: true,
          cell: (row) => {
            return (
              <UISwitch
                checked={ row.status == 1 ? true : false }
                // onChange={() => {
                //   handleStatus(row?.id, row?.status)
                // }}
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
                  navigate(`${pathLocations.subscriptionManage}/${row.id}`)
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
      data={subscription}
      pagination={true}
      paginationRowsPerPageOptions={[10, 20, 30, 40, 50]}
      paginationPerPage={10}
      paginationComponentOptions={paginationComponentOptions}
    />
  )
}

export default SubscriptionTable