import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const WithAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        if(!props.isAuth) {
            return <Redirect to='/login'/>
        } else {
            return <Component/>
        }
    }

    const mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

export default WithAuthRedirect;