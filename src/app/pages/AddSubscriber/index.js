import React from 'react'
import { Grid, MenuItem, Paper } from '@mui/material';
import UITypogrpahy from '../../../components/UITypography/UITypography';
import UITextField from '../../../components/UITextField/UITextField';
import UISelect from '../../../components/UISelect/UISelect';
import UIButton from '../../../components/UIButton/UIButton';

const AddSubscriber = () => {
  return (
    <>
        <Paper elevation={2} sx={{ borderRadius: '15px', padding: '30px' }}>
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
                            label='Submit'
                            
                            iconPosition='start'
                            // icon={<AddIcon />}
                            // onClick={() => {
                            //     setUpdateDetails(true)
                            // }}
                        /> 
                    </Grid>

                </Grid>
            
        </Paper>
    </>
  )
}

export default AddSubscriber