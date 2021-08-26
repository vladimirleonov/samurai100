import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from 'axios';
import {getAuthDataThunkCreator, setUserAuthDataActionCreator} from "../../redux/auth-reducer";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

class HeaderContainerAPI extends React.Component {

    componentDidMount() {
        debugger;
        this.props.getAuthDataThunkCreator();
        /*authAPI.getAuthData()
            .then((data) => {
                debugger;
                if(data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    this.props.setUserAuthDate(id, login, email);
                    debugger;
                }
                debugger;
            })*/
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

/*const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        setUserAuthDate (id, login, email) {
            dispatch(setUserAuthDataActionCreator(id, login, email))
        },
        getAuthDataThunkCreator
    }
}*/

const HeaderContainer = connect(mapStateToProps, {getAuthDataThunkCreator})(HeaderContainerAPI);

export default HeaderContainer;

