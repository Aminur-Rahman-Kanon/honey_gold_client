import React from 'react';
import styles from './logo.module.css';
import logo from '../../assets/images/logo/logo_1.png';

const Logo = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt='honey gold' className={styles.img} />
        </div>
    )
}

export default Logo;
