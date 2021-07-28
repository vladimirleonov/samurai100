import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={s.header}>
            <img className={s.logo} src='/logo.jpg' alt="logo"/>
                {
                    props.login ? <div className={s.login}>{props.login}</div> :
                        <div className={s.login_btn__wrapper}>
                            <NavLink className={s.login__link} to={"/profile/login"}>
                                Log in
                            </NavLink>
                        </div>
                }
        </header>
    )
}

export default Header;