import React from "react";

import Login from "./Login";
import connect from "react-redux/lib/connect/connect";
import {loginThunkCreator} from "../../redux/auth-reducer";

const LoginContainer = (props) => {
    return (
        props.isAuth ?
            <div>

            </div> :
            <Login loginThunkCreator={props.loginThunkCreator}/>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect (mapStateToProps, {
        loginThunkCreator: loginThunkCreator
    })
(LoginContainer);