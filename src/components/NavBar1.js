import React, { Fragment, useState } from "react";
import {
    Badge,
    Box,
    Button,
    Divider,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import {
    AcUnitOutlined,
    QuestionMark,
    Settings,
    Menu,
    Check,
    Notifications,
} from "@mui/icons-material";
import FlexBetween from "../Utiles/FlexBetween";
import HamburgetMenuWidget from "../Widgets/NavbarWidget/HamburgetMenuWidget";
import NavCardsWidget from "../Widgets/NavbarWidget/NavCardsWidget";
import NavPageMenuWidget from "../Widgets/NavbarWidget/NavPageMenuWidget";
import styled from "@emotion/styled";
import { smioneLogo, smioneMiniLogo } from "../Assets/Logos";

const MyIconButton = styled(IconButton)({
    color: "#fff", textDecoration: "none", position: "relative", cursor: "pointer", padding: "0px",
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
})
const Navbar1 = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
    const pages = ["Home", "Activity", "Manage", "PayPerks", "Setting", "Logout"];

    return (
        <FlexBetween padding="10px 20px" sx={{ bgcolor: "#222323", color: "#fff" }}>
            <FlexBetween gap={2}>
                {isNonMobileScreens && (
                    // <Typography
                    //     variant="h6"
                    //     noWrap
                    //     component="a"
                    //     href="/"
                    //     sx={{
                    //         mr: 2,
                    //         display: { xs: "none", md: "flex" },
                    //         fontWeight: 700,
                    //         letterSpacing: ".3rem",
                    //         color: "inherit",
                    //         textDecoration: "none",
                    //     }}
                    // >
                    //     smiOne
                    // </Typography>
                    <img src={smioneLogo}  alt="smiOne" width="120px" height="36px" />
                )}

                {!isNonMobileScreens && 
                    <img src={smioneMiniLogo} alt="smi" width="50px" height="50px"/> }

                <NavCardsWidget isNonMobileScreens={isNonMobileScreens} />
            </FlexBetween>
            {isNonMobileScreens && 
                <Stack direction="row" sx={{width:"36%"}} justifyContent="flex-start" alignItem="center">
                    <NavPageMenuWidget pages={pages} />
                </Stack>
            }

            <Stack
                direction="row"
                gap={2}
                justifyContent="flex-end"
                alignItems="center"
                sx={{ height: "100%" }}
            >
                <Badge badgeContent={13} color="error">
                    <MyIconButton >
                        <Notifications />
                    </MyIconButton>
                </Badge>
                {isNonMobileScreens ? (
                    <Fragment>
                        <MyIconButton>
                            <QuestionMark />
                        </MyIconButton>
                        <MyIconButton>
                            <Settings />
                        </MyIconButton>
                        <Button
                            sx={{
                                border: "3px solid white",
                                borderRadius: "30px",
                                padding: "8px",
                                width: "100px",
                            }}
                        >
                            <Typography variant="h6" color="white" sx={{
                                fontSize: "15px", color: "#fff", textDecoration: "none", position: "relative", cursor: "pointer",
                                "&:hover": {
                                    color: "#00C188",
                                },
                            }} >
                                LOG OUT
                            </Typography>
                        </Button>
                    </Fragment>
                ) : (
                    <Menu
                        color="#fff"
                        fontSize="large"
                        sx={{ cursor: "pointer" }}
                        onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                    />
                )}
            </Stack>

            {/* NAVBAR */}

            {!isNonMobileScreens && isMobileMenuToggled && (
                <HamburgetMenuWidget pages={pages} />
            )}
        </FlexBetween>
    );
};

export default Navbar1;
