import React from 'react';
import styles from './topbar.module.css';
import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';
import RightPanel from '../rightPanel/rightPanel';
import Drawtoggle from '../drawtoggle/drawtoggle';

const Topbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topbar}>
                <div className={styles.drawtoggle}>
                    <Drawtoggle />
                </div>
                <div className={styles.middle}>
                    <Logo />
                </div>
                <div className={styles.left}>
                    <Navbar />
                </div>
                <div className={styles.right}>
                    <RightPanel />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
