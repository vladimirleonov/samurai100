import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger;

    const logOut = () => {
        if (props.isAuth) {
            debugger;
           props.logoutThunkCreator();
        }
    }

    return(
        <header className={s.header}>
            <img className={s.logo} src='/logo.jpg' alt="logo"/>
                <div className={s.login__wrapper}>
                {
                    props.isAuth ?
                        <div className={s.info__wrapper}>
                            <span className={s.user__name}>
                                {props.login}
                            </span>
                            <button onClick={logOut} type='button' className={s.logout_elem}>
                                Log out
                            </button>
                        </div>
                        :
                        <NavLink className={s.login__link} to={"/login"}>
                            Log in
                        </NavLink>
                }
                </div>
        </header>
    )
}

export default Header;