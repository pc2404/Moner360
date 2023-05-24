import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { useOidcAccessToken } from '@axa-fr/react-oidc'
import { data } from "../Redux/Data.js"
import OverviewWidget from '../Widgets/HomeWidget/OverviewWidget'
import QuickLinkWidget from '../Widgets/HomeWidget/QuickLinkWidget'
import LatestActivityWidget from '../Widgets/HomeWidget/LatestActivityWidget'
import PayLoadWidget from '../Widgets/HomeWidget/PayLoadWidget'


const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const { accessToken, accessTokenPayload } = useOidcAccessToken();
  
  // const fetchData=async()=>{
  //   const options={
  //     // url:"https://money360-cardholder-service-ist.khumbusystems.net/api/cardholders/post-login?includeCards=true",
  //     url:"https://money360-core-service-ist.khumbusystems.net/api/cardholders/feetransactions?cardKey=720001",
  //     method: "GET",
  //     headers:{Authorization: `Bearer ${accessToken}`}
  //   }
  //   try {
  //     const response=await axios(options)
  //     console.log("response", response.data)
  //     // setData(response.data);
  //   } catch (error) {
  //     console.log("err",error)
  //   }
    
  // }

  // console.log("data",data);
  useEffect(()=>{
    // fetchData();
  },[])




  return (
    <Layout>
      <Grid container sx={{padding:"10px", bgcolor:"#F1F5FD"}} >
        <Grid item xs={12} my={4}>
          <Typography variant='h4'sx={{marginLeft:"14px"}} >{`Hi ${data.Response.Profile.FirstName}`}</Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={5} p={2}>
          <Grid item>
            <OverviewWidget />
          </Grid>
          <Grid item sx={{bgcolor:"lightblue"}}>
            payperk
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={3} p={2} display="flex" alignContent="center" justifyContent="center" >
          <QuickLinkWidget />
        </Grid>
        <Grid item xs={12} md={8} lg={4} p={2}>
          <PayLoadWidget />
        </Grid>
        <Grid item xs={12} md={4} lg={5} p={2}>
          <LatestActivityWidget />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Home
