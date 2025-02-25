import React from 'react';
import styles from './rightPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const RightPanel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
                </div>
            </div>
        </div>
    )
}

export default RightPanel;
