import { Paper, Stack, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import { quickLinkTag } from '../../Assets/Logos'
import cash from "../../Assets/cash-svgrepo-com (1).svg"
import FlexBetween from '../../Utiles/FlexBetween'
import { Money } from '@mui/icons-material'
import QuickLinkItemWidget from './QuickLinkItemWidget'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

const QuickLinkWidget = () => {
   

    return (
        <Paper elevation={8} sx={{ bgcolor: "#F1F1F1", height: "100%" }}>

            <Grid container pt={2} sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={10} sx={{ display: 'flex', flexDirection: "row" }} gap={1}>
                    <Typography variant='h6'>Quick Links</Typography>
                    <img src={quickLinkTag} alt="quickLink Tag" width="30" />
                </Grid>
            </Grid>
            <Grid container gap={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={5}>
                    <QuickLinkItemWidget logo={<Money />} title={"LOAD CASH"} />
                </Grid>
                <Grid item xs={5}>
                    <QuickLinkItemWidget logo={<Money />} title={"ADD A SECONDARY CARD"} />
                </Grid>

                <Grid item xs={5}>
                    <QuickLinkItemWidget logo={<Money />} title={"TRANSFER FUNDS"} />
                </Grid>
                <Grid item xs={5}>
                    <QuickLinkItemWidget logo={<Money />} title={"FIND AN ATM"} />
                </Grid>

                <Grid item xs={5}>
                    <QuickLinkItemWidget logo={<Money />} title={"PAYPERKS"} />
                </Grid>
                <Grid item xs={5}>
                    <QuickLinkItemWidget logo={<Money />} title={"GET HELP"} />
                </Grid>
            </Grid>

        </Paper>
    )
}

export default QuickLinkWidget

    // <Stack p={4} pt={0}>
    //     <FlexBetween>
    //         <QuickLinkItemWidget logo={<Money />} title={"LOAD CASH"} />
    //         <QuickLinkItemWidget logo={<Money />} title={"ADD A SECONDARY CARD"} />
    //     </FlexBetween>
    //     <FlexBetween>
    //         <QuickLinkItemWidget logo={<Money />} title={"TRANSFER FUNDS"} />
    //         <QuickLinkItemWidget logo={<Money />} title={"FIND AN ATM"} />
    //     </FlexBetween>
    //     <FlexBetween>
    //         <QuickLinkItemWidget logo={<Money />} title={"PAYPERKS"} />
    //         <QuickLinkItemWidget logo={<Money />} title={"GET HELP"} />
    //     </FlexBetween>
    // </Stack>