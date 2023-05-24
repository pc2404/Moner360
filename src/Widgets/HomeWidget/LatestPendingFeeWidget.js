import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import { formatDate } from '../../Utiles/DateFormat'

const LatestPendingFeeWidget = ({ item }) => {
    console.log("item", item)
    const { Amount, FeeDate, Description } = item;
    const date= formatDate(FeeDate);

    return (
        <Grid container justifyContent="center" alignItems="center" py={1} bgcolor={"#F1F5FD"} px={2} >
            <Grid item xs={8}>
                <Grid item xs={12}>
                    <Typography sx={{ color: "#836866" }}>{date}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subtitle2' sx={{ color: "#836866", textTransform: 'capitalize' }}>{Description}</Typography>
                </Grid>
            </Grid>

            <Grid item xs={4}>
                <Typography fontSize="large" sx={{ textAlign: "right", fontWeight: "bold"}} >
                    {`$${Amount}`}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default LatestPendingFeeWidget
