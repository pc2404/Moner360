import { Check } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React from 'react'
import creditCard from "../../Assets/—Pngtree—editable fake plastic credit card_5373877.png"


const NavCardItemWidget = ({card, activeCard, setActiveCard}) => {
    
    return (
        <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1} bgcolor={activeCard===card ?"#F1F5FD" : "#fff"} 
            onClick={()=>setActiveCard(card)}
        >
            <Check visibility={activeCard===card ?"" : "hidden"} />
            <img src={creditCard} alt='card' width="50px" height="50px" />
            <Typography variant='h6' fontSize="15px">{card}</Typography>

        </Stack>
    )
}

export default NavCardItemWidget
