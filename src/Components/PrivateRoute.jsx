import React from "react";
import {Navigate} from 'react-router-dom';

const PrivateRoute=({isloggedin,Children}) => {
    if(isloggedin){
        return Children;
    }
    else{
        return <Navigate to ="/login" />
    }
}

export default PrivateRoute;