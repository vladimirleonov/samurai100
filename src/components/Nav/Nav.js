import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={s.navbar}>
            <nav className={s.nav}>
                <ul className={s.menu}>
                    <li className={s.item}>
                        <NavLink exact className={s.link} activeClassName={s.active} to="/">Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.link} activeClassName={s.active} to="/messages">Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.link} activeClassName={s.active} to="/news">News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.link} activeClassName={s.active} to="/music">Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.link} activeClassName={s.active} to="/users">Find users</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink className={s.link} activeClassName={s.active} to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;