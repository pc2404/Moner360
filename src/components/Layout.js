import React, { Fragment } from 'react'
// import { withRouter } from "react-router";
import { Routes, Route, useLocation, withRouter } from "react-router-dom";

import Navbar1 from './NavBar1'
import Footer from './Footer'
import Home from '../Pages/Home';
import Manage from '../Pages/Manage';
import Payperks from '../Pages/Payperks';
import Activity from '../Pages/Activity';
import Login from '../Pages/Login';



const Layout = ({children}) => {
    return (
        <Fragment>
            <Navbar1 />
            {children}
            <Footer />
        </Fragment>

    )
}

export default Layout
