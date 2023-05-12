import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import axios from "axios"
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { setLogin } from '../Redux/UserSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  
  const data = {
    grant_type: "password",
    password: "Money360",
    client_id: "money360_cardholder_android@ist",
    client_secret: "secret",
    scope:"read write",
    username: "Candace_ist",
    computer_name: "Khumbu",
    usc: "smione",
    avn: "1.0.5",
  }


  const url="https://idm-core-sandbox.khumbusystems.net/core/connect/token"
  const getToken = () => {
    const options={
      method: 'POST',
      headers: { "User-Agent" :'okhttp/3.12.12' },
      data:qs.stringify(data),
      url:"https://idm-core-sandbox.khumbusystems.net/core/connect/token",
    }
    
    axios(options)
      .then((response)=>{
        console.log("res",response);
        // dispatch(setLogin({token:}))
      })
      .catch((error)=>{
        console.log(error)
      })
   

  }


const handleLoginClick = () => {
  getToken();
  navigate("/home")
}
return (
  <Box sx={{ height: "100vh" }}>
    <Stack justifyContent="center" alignItems="center" direction="row" sx={{ height: "100%" }}>
      <Button onClick={handleLoginClick}>Login</Button>
    </Stack>
  </Box>
)
}

export default Login


// const data = { 'bar': 123 };
// const options = {
//   method: 'POST',
//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
//   data: qs.stringify(data),
//   url,
// };
// axios(options);