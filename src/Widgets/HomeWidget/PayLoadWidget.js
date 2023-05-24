import styled from '@emotion/styled'
import { Box, Paper, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import PayLoadChart from './PayLoadChart'
import BottomWidget from './BottomWidget'

const PayLoadWidget = () => {
    const MyButton = styled(Box)({
        padding: "3px 15px",
        borderRadius: "15px",
        color: "#ffffff",
        cursor:"pointer"
    })


    return (
        <Paper elevation={8}>
            <Grid container sx={{bgcolor:"#F1F1F1"}}>
                <Grid item xs={12} p={2} pb={0}>
                    <Typography variant='h6'>Spends vs Loads</Typography>
                </Grid>
                <Grid item xs={12} px={2} mt={4} display="flex" direction="row" justifyContent="space-between">
                    <Typography variant='subtitle2' sx={{color:"#856F66"}}>(Rounded)</Typography>
                    <Stack direction="row" gap={2}>
                        <MyButton sx={{bgcolor:"#3573FF"}}>SPEND</MyButton>
                        <MyButton sx={{bgcolor:"#04C592"}}>LOAD</MyButton>
                    </Stack>
                </Grid>

                <Grid item xs={12} px={3} mb={4} >
                    <PayLoadChart />
                </Grid>
                <BottomWidget title={"VIEW ANALYSIS"}/>
            </Grid>
        </Paper>
    )
}

export default PayLoadWidget
