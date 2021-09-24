import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthDataThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";

class HeaderContainerAPI extends React.Component {

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logoutThunkCreator={this.props.logoutThunkCreator}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const HeaderContainer = connect(mapStateToProps, {
    logoutThunkCreator
})(HeaderContainerAPI);

export default HeaderContainer;

