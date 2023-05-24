import { Check } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import React from 'react'
import creditCard from "../../Assets/—Pngtree—editable fake plastic credit card_5373877.png"
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCard } from '../../Redux/UserSlice'
import { cardImage } from '../../Assets/Logos'


const NavCardItemWidget = ({card}) => {
    const activeCard=useSelector((state)=>state.activeCard);
    const dispatch=useDispatch();
    
    return (
        <Stack direction="row" justifyContent="flex-start" alignItems="center" gap={1} bgcolor={activeCard===card ?"#F1F5FD" : "#fff"} 
            onClick={()=>dispatch(setActiveCard({card:card}))}
        >
            <Check visibility={activeCard===card ?"" : "hidden"} />
            <img src={cardImage} alt='card' width="50px" height="32px" />
            <Typography variant='h6' fontSize="15px">{card}</Typography>

        </Stack>
    )
}

export default NavCardItemWidget
