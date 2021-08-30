import React from "react";

import s from './Login.module.css';

import LoginForm from './LoginForm/LoginForm';

/*import {loginThunkCreator} from "../../redux/auth-reducer";*/
import connect from "react-redux/lib/connect/connect";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit (values) {
        console.log(values);
        /*this.props.login();*/
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