import React, { useState } from 'react'
import FlexBetween from '../../Utiles/FlexBetween'
import { Stack, Typography } from '@mui/material'
import NavPageMenuItemWidget from './NavPageMenuItemWidget'

const NavPageMenuWidget = ({pages}) => {
    const [activePage, setActivePage]= useState("Home");

    const captureChange=(pageChange)=>{
        setActivePage(pageChange);
    }
    return (
        <Stack direction="row" gap={2} >
            {pages.slice(0, 4).map((page) => (
                <NavPageMenuItemWidget page={page} key={page} activePage={activePage} captureChange={captureChange}/>
            ))}
        </Stack>
    )
}

export default NavPageMenuWidget
