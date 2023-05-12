import React from 'react'
import {AppBar, Badge, Button, Paper, Stack, Typography} from '@mui/material';
import styled from '@emotion/styled';
import Grid from '@mui/material/Unstable_Grid2';
import {AcUnitOutlined, KeyboardArrowUp, Notifications, QuestionMark, Settings} from "@mui/icons-material"
import FlexBetween from '../Utiles/FlexBetween';
import creditCard from "../Assets/—Pngtree—editable fake plastic credit card_5373877.png"

const Navbar = () => {

    const pages=["Home", "Activity","Manage", "PayPerks"]

    const MyNavbar=styled(AppBar)({
        backgroundColor:"#222323",
        padding:"10px",
        
    })
  return (
    <MyNavbar>
        <Grid container >
            <Grid item xs={8} md={4}>
                <Stack direction="row" gap={2}  alignItems="center">
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        smiOne
                    </Typography>
                    <AcUnitOutlined sx={{display: {xs:"flex", md:"none"}}}/>
                    <Paper sx={{padding:"1px 10px 1px 20px"}}>
                        <FlexBetween alignItems="center" gap={1}>
                            <img src={creditCard} alt='card' width="50px" height="50px" />
                            <Typography variant='h6' fontSize="15px">Candace-7200</Typography>
                            <KeyboardArrowUp />
                        </FlexBetween>
                    </Paper>
                
                </Stack>

            </Grid>
            <Grid item md={4} sx={{display:{xs : "none", md:"flex"}}}>
                <FlexBetween direction="row" gap={2}>
                    {pages.map((page)=>(
                        <Typography component='a' href='/home' 
                            sx={{color:"#fff", textDecoration:"none", position:"relative", 
                                "&::after":{
                                    content:"''",
                                    width:"0px",
                                    height:"3px",
                                    background:"#00C188",
                                    position:"absolute",
                                    left:"0px",
                                    bottom:"-24px",
                                    transition:"0.5s"

                                },
                                "&:hover::after":{
                                    width:"100%"
                                }
                            }}
                        >{page}</Typography>
                    ))}
                </FlexBetween>
            </Grid>
            <Grid item xs={4} md={4} >
                <Stack direction="row" gap={2} justifyContent="flex-end" alignItems="center" sx={{height:"100%", paddingRight:"20px"}}>
                    <Badge badgeContent={13} color='error'>
                        <Notifications/>
                    </Badge>
                    <QuestionMark />
                    <Settings />
                    <Button 
                        sx={{border:"3px solid white", 
                            borderRadius:"30px",
                            padding:"8px",
                            width:"100px"
                        }}
                    >
                    <Typography variant='h6' color="white" sx={{fontSize:"15px"}}>LOG OUT</Typography>
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    </MyNavbar>
  )
}

export default Navbar
