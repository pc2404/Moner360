import { Box, Paper, Stack, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import FlexBetween from '../../Utiles/FlexBetween'
import {KeyboardArrowUp } from '@mui/icons-material'
import NavCardItemWidget from './NavCardItemWidget'
import creditCard from "../../Assets/—Pngtree—editable fake plastic credit card_5373877.png"
import { data } from '../../Redux/Data'
import { cardImage } from '../../Assets/Logos'


const NavCardsWidget = ({isNonMobileScreens}) => {
    const [isCardMenuToggled, setIsCardMenuToggled]=useState(false);
    const [activeCard, setActiveCard]=useState("Candace-7200")
    const cardsArray=data.Response.Cards;

    return (
        <Fragment>
            <Paper sx={{ padding: "0px 7px 1px 15px", cursor: "pointer", bgcolor: "#F1F1F1" }} onClick={() => setIsCardMenuToggled(!isCardMenuToggled)} >
                <FlexBetween gap={1} p={1}>
                    <img src={cardImage} alt='card' width="50px" height="36px" />
                    <Typography variant='h6' fontSize="15px">Candace-7200</Typography>
                    <KeyboardArrowUp />
                </FlexBetween>
            </Paper>

            {isCardMenuToggled && (
                <Box
                    left={isNonMobileScreens ? '150px' : '60px'}
                    sx={{
                        width: "300px",
                        bgcolor: "#fff",
                        position: "fixed",
                        top: "75px",
                        borderRadius: "5px",
                        color: "black",
                        padding: "10px 0px",
                        cursor: "pointer"
                    }}
                >
                    <Stack direction="column">
                        <Box sx={{ padding: "10px", color: "gray" }}>
                            <Typography fontSize="small">Switch Card Context</Typography>
                        </Box>
                        {cardsArray.map((card) => (
                            <NavCardItemWidget card={card.NickName} key={card.NickName} activeCard={activeCard} setActiveCard={setActiveCard}/>

                        ))}
                    </Stack>
                </Box>


            )}
        </Fragment>
    )
}

export default NavCardsWidget





