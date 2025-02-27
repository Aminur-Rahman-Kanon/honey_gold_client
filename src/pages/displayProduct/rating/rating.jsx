import React from 'react';
import styles from './rating.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Rating = ({ amount }) => {

    if (!amount || typeof amount !== 'number') return;

    const displayStar = [];
    const inactive = 5 - amount;

    if (inactive <= 0){
        for (let i=0; i<amount; i++){
            displayStar.push(<FontAwesomeIcon key={i} icon={faStar} className={`${styles.icon} ${styles.active}`}/>)
        }
    }
    else {
        for (let i=0; i<amount; i++){
            displayStar.push(<FontAwesomeIcon key={i} icon={faStar} className={`${styles.icon} ${styles.active}`}/>)
        }
        for (let i=0; i<inactive; i++){
            displayStar.push(<FontAwesomeIcon key={i+amount} icon={faStar} className={styles.icon}/>)
        }
    }

    return (
        <div className={styles.container}>
            {displayStar}
        </div>
    )
}

export default Rating;
