import { Box, Stack } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const Home = () => {
  const token=useSelector((state)=>state.token);
  console.log(token);

  const fetchData=async()=>{
    const options={
      url:"https://money360-cardholder-service-ist.khumbusystems.net/api/cardholders/post-login?includeCards=true",
      method: "GET",
      headers:{Authorization: `Bearer ${token}`}
    }
    try {
      const response=await axios(options)
      console.log("response", response)
    } catch (error) {
      console.log("err",error)
    }
    
  }
  useEffect(()=>{
    fetchData();
  },[])


  return (
    <Stack direction="column" sx={{ bgcolor: "#F1F5FD", height: "100vh" }}>
      <Box>Home</Box>
      <Box>Home</Box>
      <Box>Home</Box>
      <Box>Home</Box>
      <Box>Home</Box>
      <Box>Home</Box>
      <Box>Home</Box>
      <Box>Home</Box>
    </Stack>
  )
}

export default Home
