import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.nav}>
                <li className={styles.navItem}>
                    <a href='#' className={styles.link}>Home</a>
                </li>
                <li className={styles.navItem}>
                    <a href='#' className={styles.link}>Shop</a>
                </li>
                <li className={styles.navItem}>
                    <a href='#' className={styles.link}>Contact</a>
                </li>
                <li className={styles.navItem}>
                    <a href='#' className={styles.link}>About</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
