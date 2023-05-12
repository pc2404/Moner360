import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import googlePlay from "../Assets/google-play-icon-transparent-7.png"
import Grid from '@mui/material/Unstable_Grid2'
import { Apple, Google } from '@mui/icons-material'

const Footer = () => {
    const itemsArray=["Cardholder Agreement",
        "About Us",
        "Privacy Policy",
        "Terms of Use",
        "E-Sign Agreement"]

    return (
        <Box sx={{ width: "100%", bgcolor: "#222323", color: "#fff" }}>
            <Grid container>
                <Grid item md={4} xs={12} sx={{padding:"20px"}}>

                    <Stack direction="column" gap={4} sx={{padding:"20px"}}>
                        <Typography
                            variant="h5"
                            sx={{
                                mr: 2,
                                display: "flex",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            smiOne
                        </Typography>
                        <Stack direction="row">
                            <Stack mr={1} justifyContent="space-around" alignItems="center" direction="row"
                                sx={{
                                    borderRadius: "30px",
                                    padding: "7px 15px",
                                    width: "110px",
                                    bgcolor: "#3C3C3C",
                                    
                                   
                                }}
                            >
                                <Apple />
                                <Stack direction="column">
                                    <Typography variant='h6' fontSize="10px">Download on</Typography>
                                    <Typography variant='h6' fontSize="12px">the App Store</Typography>
                                </Stack>
                            </Stack>
                            <Stack  justifyContent="space-around" alignItems="center" direction="row"
                                sx={{
                                    borderRadius: "30px",
                                    padding: "7px 15px",
                                    width: "110px",
                                    bgcolor: "#3C3C3C",
                                }}
                            >
                                <img src={googlePlay} alt='card' width="20px" height="20px" />

                                <Stack direction="column">
                                    <Typography variant='h6' fontSize="10px">Download on</Typography>
                                    <Typography variant='h6' fontSize="12px">the App Store</Typography>
                                </Stack>
                            </Stack>
                        </Stack>


                    </Stack>
                </Grid>
                <Grid item md={4} xs={12} sx={{padding:"20px", borderLeft:"2px solid white"}}>
                    <Stack direction="column" justifyContent="flex-start" gap={1} pt={3}>
                       {itemsArray.map((item)=>(
                          <Typography>{item}</Typography>
                       ))}
                    </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Stack direction="column" gap={2} p={4}>
                        <Typography variant='body' >Download the mobile app today.
                        Text APP to 42627.   Reply HELP for help, reply STOP to unsubscribe.
                        Standard text messaging and/or data rates from your wireless service provider may apply.</Typography>
                        <Typography color="grey">Copyright 2022 smiONE Card Services, LLC
                        All Rights Reserved</Typography>
                    </Stack>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Footer
