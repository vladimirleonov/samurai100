import React from 'react';
import s from './Preloader.module.css';

import preloader from '../../assets/preloader.svg';

const Preloader = () => {
    return (
        <img className={s.preloader} src={preloader}/>
    )
}

export default Preloader;