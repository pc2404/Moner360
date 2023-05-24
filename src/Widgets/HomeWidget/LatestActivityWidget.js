import { Divider, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React, { Fragment, useState } from 'react'
import { pendingFees, transactions } from '../../Redux/LatestActivity'
import LatestAllActivityItemWidget from './LatestAllActivityItemWidget'
import styled from '@emotion/styled'
import LatestPendingFeeWidget from './LatestPendingFeeWidget'
import BottomWidget from './BottomWidget'
import { formatDate } from '../../Utiles/DateFormat'

const LatestActivityWidget = () => {
    const transactionDetails = transactions.Response.Items;
    const pendingFeesDetails = pendingFees.Response.PendingFees;
    const [activeButton, setActiveButton] = useState("All Activity");

    const MyTypoWithEffect = styled(Typography)({
        color: "#00C197", textDecoration: "none", position: "relative", cursor: "pointer", padding: "0.5rem 1rem",
        "&::after": {
            content: "''",
            width: "100%",
            height: "4px",
            background: "#00C197",
            position: "absolute",
            left: "0px",
            bottom: "-0.1rem",
            transition: "0.5s",
            color: "#00C197"


        },
    })

    const MyTypo = styled(Typography)({
        cursor: "pointer",
        padding: "0.5rem 1rem",
    })

    return (
        <Paper elevation={8}>
            <Grid container>
                <Grid item xs={12} p={2} pb={0}>
                    <Typography variant='h5'>Latest Activity</Typography>
                </Grid>
                <Grid item xs={12} p={2} pt={0}>
                    <Typography variant='caption' fontWeight="bold" sx={{ color: "#836866" }}>As of May22, 02:34 PM</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", flexDirection: "row" }}>
                    <Grid item onClick={() => setActiveButton("All Activity")}>
                        {activeButton === "All Activity" ?
                            <MyTypoWithEffect>ALL ACTIVITY</MyTypoWithEffect>
                            :
                            <MyTypo>ALL ACTIVITY</MyTypo>
                        }
                    </Grid>
                    <Grid item onClick={() => setActiveButton("Pending Fees")}>
                        {activeButton === "Pending Fees" ?
                            <MyTypoWithEffect>PENDING FEES</MyTypoWithEffect>
                            :
                            <MyTypo>PENDING FEES</MyTypo>
                        }
                    </Grid>
                </Grid>

                {activeButton==="All Activity" ?

                    transactionDetails.slice(0, 5).map((transItem) => (
                        <Grid xs={12}>
                            <LatestAllActivityItemWidget item={transItem} />
                            <Divider />
                        </Grid>
                        
                        ))
                        
                        :
                        
                        pendingFeesDetails.map((item)=>(
                        <Grid xs={12}>
                            <LatestPendingFeeWidget item={item} />
                            <Divider />
                        </Grid>

                    ))
                }

                <BottomWidget title={"SEE ALL ACTIVITY"} />

            </Grid>
        </Paper>
    )
}

export default LatestActivityWidget
