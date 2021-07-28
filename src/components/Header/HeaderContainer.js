import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from 'axios';
import {setUserAuthDataActionCreator} from "../../redux/auth-reducer";

class HeaderContainerAPI extends React.Component {
    componentDidMount() {

    }

    getUserAuthData = () => {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then((response) => {
                debugger;
                this.props.setUserAuthDate(response.data.data.id, response.data.data.login, response.data.data.email)
            })
    }

    render() {
        return (
            <Header login={this.props.userAuthData.login}/>
        )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        userAuthData: state.auth.userAuthData
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
