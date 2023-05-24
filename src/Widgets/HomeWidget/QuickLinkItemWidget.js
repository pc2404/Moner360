import { Card, CardContent, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const QuickLinkItemWidget = ({logo, title}) => {
  return (
    <Paper elevation={8} p={2} sx={{margin:"10px 0px"}}>
        <Card sx={{maxWidth:"12rem", height:"5rem"}}>
            <Stack gap={1} sx={{bgcolor:"#FFFFFF"}}>
                <IconButton sx={{padding:0, marginTop:".2rem"}}>
                    {logo}
                </IconButton>
            
                <CardContent sx={{textAlign:"center", padding:"10px 20px"}}>
                   <Typography fontSize="small"> {title}</Typography>
                </CardContent>
            </Stack>
        </Card>
      
    </Paper>
  )
}

export default QuickLinkItemWidget
