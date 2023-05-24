import { Box, Card, CardMedia, Link, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import FlexBetween from '../../Utiles/FlexBetween'
import creditCard from "../../Assets/—Pngtree—editable fake plastic credit card_5373877.png"
import { data } from "../../Redux/Data"
import { useSelector } from 'react-redux'
import { ArrowForward, ArrowForwardIos } from '@mui/icons-material'
import { cardImage } from '../../Assets/Logos'
import styled from '@emotion/styled'
import BottomWidget from './BottomWidget'


const OverviewWidget = () => {
  const activeCard = useSelector((state) => state.activeCard);
  const cards = data.Response.Cards;
  const cardDetails = cards.filter((card) => card.NickName === activeCard);
  console.log(cardDetails[0].NickName);
  const cardEndingWith = cardDetails[0].NickName.substring(cardDetails[0].NickName.length - 4)
  return (

    <Paper elevation={8}>
      <Card>
        <Stack direction="column" p={2} pb={0} sx={{ bgcolor: "#F1F1F1" }}>
          <Typography variant='h6'>Overview</Typography>
          <Stack direction="row">
            <Stack>
              <CardMedia
                component="img"
                alt="card"
                sx={{ maxWidth:250, paddingTop:2  }}
                image={cardImage}
              />

              <Box sx={{ bgcolor: "#00C188", position: "relative", top: "-20px", margin: "0px 5px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}  >
                <Typography sx={{ textTransform: 'uppercase', fontWeight: 'medium', color: "#fff", textAlign: "center", fontSize: "small", padding: "3px" }}>
                  {`${cardDetails[0].AccountTypeName} - ${cardDetails[0].Status}`}
                </Typography>
              </Box>
            </Stack>
            <Stack direction="column" alignItems="flex-start" justifyContent="center" ml={2}>
              <Typography variant='subtitle2' fontSize="40px">{`$${cardDetails[0].Balance}`}</Typography>
              <Typography variant='subtitle2' fontSize="small">Available Balance</Typography>
              <Typography variant='subtitle2' sx={{ color: "#999BA7" }}>{`CARD ENDING - ${cardEndingWith}`}</Typography>
              <Link href="#" variant="body2" color="#2E70FD" underline="always" sx={{ marginTop: "10px" }}>
                Change Card
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <BottomWidget title={"MANAGE CARDS"}/>
      </Card>

    </Paper>


  )
}

export default OverviewWidget
