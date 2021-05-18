import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.navbar}>
            <nav className={s.nav}>
                <ul className={s.menu}>
                    <li className={s.item}>
                        <a className={s.link}>Profile</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link}>Messages</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link}>News</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link}>Music</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link}>Settings</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;