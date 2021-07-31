import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger;
    return(
        <header className={s.header}>
            <img className={s.logo} src='/logo.jpg' alt="logo"/>
                <div className={s.login__wrapper}>
                {
                    props.isAuth ? <div className={s.login__text}>{props.login}</div> :

                    <NavLink className={s.login__link} to={"/login"}>
                        Log in
                    </NavLink>

                }
                </div>
        </header>
    )
}

export default Header;