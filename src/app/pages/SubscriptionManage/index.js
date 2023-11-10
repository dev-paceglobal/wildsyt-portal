import React from 'react'
import { Grid, MenuItem, Paper } from '@mui/material'
import UITypogrpahy from '../../../components/UITypography/UITypography';
import { Div, InnerDiv } from '../../../components/UISelect/ui';
import UISelect from '../../../components/UISelect/UISelect';
import UITextField from '../../../components/UITextField/UITextField';
import UsersTable from '../../../container/Users/UsersTable';
import SubscriptionTable from '../../../container/Subscription/SubscriptionTable';
import UIButton from '../../../components/UIButton/UIButton';
import {useNavigate} from 'react-router-dom'

import AddIcon from '@mui/icons-material/Add'

const subscription = [
    {
        id: 1,
        package: "Package 1",
        type: "Monthly",
        price: 23,
        status: 1
    }
]

const SubscriptionManage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Paper elevation={2} sx={{ borderRadius: '15px', padding: '30px' }}>
                <Grid container spacing={3} justifyContent='space-between'>
                    <Grid item xs={12}>
                        <UITypogrpahy type='subHeading' title='Subscription Management' />
                    </Grid>
                    <Div>
                        <InnerDiv>
                            <UISelect label="Status" >
                                <MenuItem value={1}>active</MenuItem>
                                <MenuItem value={0}>Inactive</MenuItem>
                            </UISelect>

                        </InnerDiv>
                        <InnerDiv>
                            <UITextField label='Search' fullWidth />
                        </InnerDiv>
                    </Div>
                    <Grid item xs={12} textAlign="end" paddingRight="20px" >
                        
                            
                                <UIButton
                                    btnType='icon'
                                    variant='contained'
                                    label='Add Package'
                                    
                                    iconPosition='start'
                                    icon={<AddIcon />}
                                    onClick={() => {
                                        
                                    }}
                                />
                            
                        
                    </Grid>
                    <Grid item xs={12}>

                        <SubscriptionTable subscription={subscription} />
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default SubscriptionManage;