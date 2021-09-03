import React from "react";

import s from './Login.module.css';

import LoginForm from './LoginForm/LoginForm';

import {loginThunkCreator} from "../../redux/auth-reducer";
import connect from "react-redux/lib/connect/connect";

class Login extends React.Component {
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
        loginThunkCreator(loginField, passwordField, rememberMeField);
        debugger;
    }
    render() {
        return (
            <div className={s.login}>
                <LoginForm onSubmit={this.submit}/>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    loginThunkCreator
})(Login);