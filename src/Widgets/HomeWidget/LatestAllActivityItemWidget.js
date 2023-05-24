import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react'
import { formatDate } from '../../Utiles/DateFormat';

const LatestAllActivityItemWidget = ({ item }) => {
  console.log("item", item)
  const MyButton=styled(Box)({
    backgroundColor:"#F2ECC8",
    border:"1px solid #DA8301",
    padding:"0px 10px",
    borderRadius:"6px"
  })

  const { Amount, DebitedCardDisplayNumber, TransactionType, ExternalStatus, Description, TransactionTime} = item;
  // console.log("time", transactionTime)
  const date= formatDate(TransactionTime);

  return (
    <Grid container justifyContent="center" alignItems="center" py={1} bgcolor={(ExternalStatus==="Pending") ? "#F1F1F1" : "#F1F5FD"} px={2} py={1} >
      <Grid item xs={8}>
      
        <Grid item xs={12} gap={(ExternalStatus==="Pending") ? 2 : 0} display="flex" direction="row">
          <Grid item>
            {(ExternalStatus==="Pending") && 
              <MyButton>
                <Typography variant='caption' sx={{color:"#8F855D"}}>PENDING</Typography>
              </MyButton>
          
            }
          </Grid>
          <Grid item>
            <Typography sx={{color:"#836866"}}>{date}</Typography> 
          </Grid>

        </Grid>
        <Grid item xs={12}>
          <Typography variant='caption' sx={ExternalStatus==="Pending" ? {color:"#836866", textTransform: 'uppercase'} : {color:"#9BB5E0", textTransform: 'uppercase'}}>{TransactionType}</Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant='subtitle2' sx={{color:"#836866", textTransform: 'capitalize'}}>{Description}</Typography>
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <Typography fontSize="large"  sx={DebitedCardDisplayNumber ? {textAlign:"right", fontWeight:"bold"} : {textAlign:"right", fontWeight:"bold", color:"#00C188"} } >
          {`${(DebitedCardDisplayNumber) ? "-" : "+"} $${Amount}`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default LatestAllActivityItemWidget
