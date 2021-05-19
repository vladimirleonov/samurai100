import React from 'react';
import s from './Nav.module.css';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={s.navbar}>
            <nav className={s.nav}>
                <ul className={s.menu}>
                    <li className={s.item}>
                        <Link className={s.link} to="/">Profile</Link>
                    </li>
                    <li className={s.item}>
                        <Link className={s.link} to="/messages">Messages</Link>
                    </li>
                    <li className={s.item}>
                        <Link className={s.link} to="/news">News</Link>
                    </li>
                    <li className={s.item}>
                        <Link className={s.link} to="/music">Music</Link>
                    </li>
                    <li className={s.item}>
                        <Link className={s.link} to="/settings">Settings</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;