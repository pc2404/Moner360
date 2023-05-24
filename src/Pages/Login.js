import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import axios from "axios"
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { setLogin } from '../Redux/UserSlice';
import { useOidc} from "@axa-fr/react-oidc";


const Login = () => {
  const { login, logout, renewTokens, isAuthenticated } = useOidc();
  const navigate = useNavigate();
  const dispatch=useDispatch();
  
  // const data = {
  //   grant_type: "password",
  //   password: "Money360",
  //   client_id: "money360_cardholder_android@ist",
  //   client_secret: "secret",
  //   scope:"read write",
  //   username: "Candace_ist",
  //   computer_name: "Khumbu",
  //   usc: "smione",
  //   avn: "1.0.5",
  // }


 


const handleLoginClick = () => {
  login('/home')
}
return (
  <Box sx={{ height: "100vh" }}>
    <Stack justifyContent="center" alignItems="center" direction="row" sx={{ height: "100%" }}>
      {!isAuthenticated && 
        <Button onClick={handleLoginClick}>Login</Button>
      }
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