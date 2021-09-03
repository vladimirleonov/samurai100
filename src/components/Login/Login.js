import React from "react";

import s from './Login.module.css';

import LoginForm from './LoginForm/LoginForm';

import {loginThunkCreator} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    debugger;
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit (values) {
        debugger;
        console.log(values);
        let { loginField, passwordField, rememberMeField } = values;
        console.log(loginField);
        console.log(passwordField);
        console.log(rememberMeField);
        debugger;
        this.props.loginThunkCreator(loginField, passwordField, rememberMeField);
        debugger;
    }
    render() {
        return (
            this.props.isAuth ?
                <Redirect to='/profile/18418'/>
            :
            <div className={s.login}>
                <LoginForm onSubmit={this.submit}/>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    loginThunkCreator
})(Login);
