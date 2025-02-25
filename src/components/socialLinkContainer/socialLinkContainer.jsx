import React from 'react';
import styles from './socialLinkContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialLinkContainer = () => {
    return (
        <div className={styles.container}>
            <a href='#' className={styles.link}>
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
            <a href='#' className={styles.link}>
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
            <a href='#' className={styles.link}>
                <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
            </a>
            <a href='#' className={styles.link}>
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
        </div>
    )
}

export default SocialLinkContainer
