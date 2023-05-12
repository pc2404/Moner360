import { Typography } from '@mui/material'
import React from 'react'

const TypoWithTransitionEffect = ({word, color}) => {
  return (
    <Typography
      sx={{
        color: "#fff", textDecoration: "none", position: "relative", cursor: "pointer",
        "&::after": {
          content: "''",
          width: "0px",
          height: "3px",
          background: {color},
          position: "absolute",
          left: "0px",
          bottom: "-24px",
          transition: "0.5s"

        },
        "&:hover": {
          color: {color}
        },
        "&:hover::after": {
          width: "100%",

        }
      }}
    >{word}</Typography>
  )
}

export default TypoWithTransitionEffect
