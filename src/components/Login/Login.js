import React from "react";

import s from './Login.module.css';

import LoginForm from './LoginForm/LoginForm';

import {loginThunkCreator} from "../../redux/auth-reducer";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit (values) {
        console.log(values);
        let { loginField, passwordField, rememberMeField } = values;
        console.log(loginField);
        console.log(passwordField);
        console.log(rememberMeField);
        if(!rememberMeField) {
            rememberMeField = false
            console.log(rememberMeField);
        }
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

export default Login;