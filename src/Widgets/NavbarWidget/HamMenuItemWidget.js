import { Divider, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const HamMenuItemWidget = ({ page }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        // setActivePage(page);
        // if (page === "Home")
        //     navigate("/")
        // else
        //     navigate(`/${page}`)

    }
    return (
        <Fragment>
            <Stack
                justifyContent="center"
                sx={{ width: "100%", height: "45px", padding: "10px" }}
                onClick={handleClick}
            >
                <Typography
                    fontSize="small"
                    fontWeight="bold"
                    sx={{
                        textDecoration: "none",
                        position: "relative",
                        cursor: "pointer",
                        "&:hover": {
                            color: "#00C188",
                        },
                    }}
                >
                    {page}
                </Typography>
            </Stack>
            <Divider color="grey" />
        </Fragment>
    );
};

export default HamMenuItemWidget;
