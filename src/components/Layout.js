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



const Layout = () => {
    return (
        <Fragment>
            <Navbar1 />
         
                <Route path="/home" element={<Home />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/payperks" element={<Payperks />} />
                <Route path="/activity" element={<Activity />} />
      
            <Footer />
        </Fragment>

    )
}

export default Layout
