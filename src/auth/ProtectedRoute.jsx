import React from 'react'
import {Navigate, } from "react-router-dom"

const Protected = ({ isLoggedIn, children }) => {
    // console.log("Protected");
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
    };


export default Protected;