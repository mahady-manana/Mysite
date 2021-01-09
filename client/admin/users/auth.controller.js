import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";

const AuthController = ({Component : Component, ...rest}) => {
    <Route {...rest} render={
        props => {
            undefined ? (<div>Null</div>) : (
                <Redirect to={{
                    pathname : "/admin/signin"
                }}/>
            ) 
        }
    } 
    />
}

export default AuthController;