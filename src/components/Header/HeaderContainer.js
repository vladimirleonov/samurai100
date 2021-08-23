import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from 'axios';
import {setUserAuthDataActionCreator} from "../../redux/auth-reducer";

import {authAPI} from "../../api/api";

class HeaderContainerAPI extends React.Component {

    componentDidMount() {
        debugger;
        authAPI.getAuthData()
            .then((data) => {
                debugger;
                if(data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    //this.props.setUserAuthDate(response.data.data.id, response.data.data.login, response.data.data.email);
                    this.props.setUserAuthDate(id, login, email);
                    debugger;
                }
                debugger;
            })
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        setUserAuthDate (id, login, email) {
            dispatch(setUserAuthDataActionCreator(id, login, email))
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerAPI);

export default HeaderContainer;
