import { ArrowForwardIos } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const BottomWidget = ({title}) => {
    return (
        <Stack direction="row" sx={{ bgcolor: "#E6E2D8", width: "100%", height: "4rem" }} justifyContent="flex-end" alignItems="center">
            <Typography variant='subtitle2' sx={{ color: "#AE905D", cursor:"pointer" }} fontSize="small" >{title}</Typography>
            <ArrowForwardIos fontSize='2px' sx={{ marginRight: "10px", color: "#AE905D" }} />
        </Stack>
    )
}

export default BottomWidget
