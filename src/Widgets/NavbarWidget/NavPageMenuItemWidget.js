import { Typography } from '@mui/material'
import React from 'react'
import {useNavigate} from "react-router-dom"

const NavPageMenuItemWidget = ({page, activePage, setActivePage}) => {

  const navigate=useNavigate();
  const handleClick=()=>{
    setActivePage(page);
    navigate(`/${page}`)

  }
  return (
    <Typography
      sx={!(activePage===page) ? {
        color: "#fff", textDecoration: "none", position: "relative", cursor: "pointer",
        "&::after": {
          content: "''",
          width: "0px",
          height: "3px",
          background: "#00C188",
          position: "absolute",
          left: "0px",
          bottom: "-24px",
          transition: "0.5s"

        },
        "&:hover": {
          color: "#00C188"
        },
        "&:hover::after": {
          width: "100%",

        }
      }
    :
    {color: "#00C188", textDecoration: "none", position: "relative", cursor: "pointer",
    "&::after": {
      content: "''",
      width: "100%",
      height: "3px",
      background: "#00C188",
      position: "absolute",
      left: "0px",
      bottom: "-24px",
      transition: "0.5s"

    }}

  }
  onClick={handleClick}
    >{page}</Typography>
  )
}

export default NavPageMenuItemWidget
