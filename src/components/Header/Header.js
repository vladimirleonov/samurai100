import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img className={s.logo} src='/logo.jpg' alt="logo"/>
        </header>
    )
}

export default Header;