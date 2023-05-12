import { Box, Stack} from '@mui/material'
import React from 'react'
import HamMenuItemWidget from './HamMenuItemWidget'

const HamburgetMenuWidget = ({pages}) => {
    return (
        <Box
            sx={{
                width: "200px",
                height: "100%",
                position: "fixed",
                top: "100px",
                right: "0px",
                bgcolor: "#222323",
                zIndex: "10"
            }}
        >
            {/*MENU ITEMS */}
            <Stack direction="column">
                {pages.map((page) => (
                   <HamMenuItemWidget page={page} key={page}/>
                ))}
            </Stack>
            
        </Box>
    )
}

export default HamburgetMenuWidget
