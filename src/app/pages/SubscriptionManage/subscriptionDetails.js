import { Grid, MenuItem, Paper } from '@mui/material';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Div, InnerDiv } from '../../../components/UISelect/ui';
import UITypogrpahy from '../../../components/UITypography/UITypography';
import UIButton from '../../../components/UIButton/UIButton';
import AddIcon from '@mui/icons-material/Add'
import UISelect from '../../../components/UISelect/UISelect';

import UITextField from '../../../components/UITextField/UITextField';

const SubscriptionDetails = () => {

    const [updateDetails, setUpdateDetails] = useState(true);
    const { id } = useParams();
    console.log(id, "ID");

    return (
        <>
            <Paper elevation={2} sx={{ borderRadius: '15px', padding: '30px' }}>
            { updateDetails ?  
                <Grid>
                    <Grid container spacing={3} justifyContent='space-between' >
                        <Grid item xs={3} display="flex">
                            <UITypogrpahy
                                type='subHeading'
                                title='Name:'
                                sx={{ color: (theme) => theme.palette.primary.black }}
                                paddingRight="8px"

                            />
                            <UITypogrpahy type='subHeading' title="Package Name A" sx={{ fontWeight: 500 }} />
                        </Grid>
                        <Grid item xs={3} display="flex">
                            <UITypogrpahy
                                type='subHeading'
                                title='Status:'
                                sx={{ color: (theme) => theme.palette.primary.black }}
                                paddingRight="8px"
                            />
                            <UITypogrpahy type='subHeading' title="active" sx={{ fontWeight: 500 }} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justifyContent='space-between' >
                        <Grid item xs={3} display="flex">
                            <UITypogrpahy
                                type='subHeading'
                                title='Type:'
                                sx={{ color: (theme) => theme.palette.primary.black }}
                                paddingRight="8px"
                            />
                            <UITypogrpahy type='subHeading' title="Monthly" sx={{ fontWeight: 500 }} />
                        </Grid>
                        <Grid item xs={3} display="flex">
                            <UITypogrpahy
                                type='subHeading'
                                title='Price: '
                                sx={{ color: (theme) => theme.palette.primary.black }}
                                paddingRight="8px"
                            />
                            <UITypogrpahy type='subHeading' title="110" sx={{ fontWeight: 500 }} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justifyContent='space-between' >
                        <Grid item xs={6}>
                            <UITypogrpahy
                                type='subHeading'
                                title='Details:'
                                sx={{ color: (theme) => theme.palette.primary.black }}
                                paddingRight="8px"
                            />
                            <UITypogrpahy marginTop="5px" type='subpara' title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget." sx={{ fontWeight: 500 }} />
                        </Grid>
                        
                    </Grid>
                    <Grid item xs={12} textAlign="left" paddingRight="20px" marginTop="20px" > 
                        <UIButton
                            btnType='icon'
                            variant='contained'
                            label='Edit'
                            
                            iconPosition='start'
                            // icon={<AddIcon />}
                            onClick={() => {
                                setUpdateDetails(false)
                            }}
                        /> 
                    </Grid>
                </Grid>
            :  
                <Grid container xs={12} >
                    <Grid xs={12}  padding="6px 0px">
                        <Grid item xs={3} display="flex">
                            <UITypogrpahy
                                type='subHeading'
                                title='Name:'
                                sx={{ color: (theme) => theme.palette.primary.black }}
                                padding="10px 8px 0px 0px"
                                width="90px"
                            />
                            <UITextField label='Package Name' fullWidth />
                        </Grid>
                    </Grid>

                    <Grid xs={12} padding="6px 0px">
                        <Grid item xs={3} display="flex">
                            <UITypogrpahy
                                type='subHeading'
                                title='Type:'
                                sx={{ color: (theme) => theme.palette.primary.black }}
                                padding="10px 8px 0px 0px"
                                width="90px"
                            />
                            <UISelect label="Select">
                                <MenuItem value="weekly">Weekly</MenuItem>
                                <MenuItem value="monthly">Monthly</MenuItem>
                                
                            </UISelect>
                        </Grid>
                    </Grid>

                    <Grid xs={12} padding="6px 0px">
                        <Grid item xs={3} display="flex">
                            <UITypogrpahy
                                type='subHeading'
                                title='Price:'
                                sx={{ color: (theme) => theme.palette.primary.black }}
                                padding="10px 8px 0px 0px"
                                width="90px"
                            />
                            <UITextField label='$00' fullWidth />
                        </Grid>
                    </Grid>

                    <Grid xs={12} padding="6px 0px">
                        <Grid item xs={3} display="flex">
                            <UITypogrpahy
                                type='subHeading'
                                title='Details:'
                                sx={{ color: (theme) => theme.palette.primary.black }}
                                padding="10px 8px 0px 0px"
                                width="90px"
                            />
                            <UITextField fullWidth multiline maxRows={8} rows={5} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} textAlign="left" paddingRight="20px" marginTop="20px" > 
                        <UIButton
                            btnType='icon'
                            variant='contained'
                            label='Update'
                            
                            iconPosition='start'
                            // icon={<AddIcon />}
                            onClick={() => {
                                setUpdateDetails(true)
                            }}
                        /> 
                    </Grid>

                </Grid>
            }
            </Paper>
        </>
    )
}

export default SubscriptionDetails;