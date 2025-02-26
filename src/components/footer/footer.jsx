import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.itemTop}>
                    <h3 className={styles.headingSmallBlack}>customer service</h3>
                    <ul className={styles.lists}>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>help & contact us</a>
                        </li>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>returns & refunds</a>
                        </li>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>online stores</a>
                        </li>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>terms & conditions</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.itemTop}>
                    <h3 className={styles.headingSmallBlack}>company</h3>
                    <ul className={styles.lists}>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>what we do</a>
                        </li>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>available services</a>
                        </li>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>latest posts</a>
                        </li>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.itemTop}>
                    <h3 className={styles.headingSmallBlack}>profile</h3>
                    <ul className={styles.lists}>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>my account</a>
                        </li>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>checkout</a>
                        </li>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>order tracking</a>
                        </li>
                        <li className={styles.list}>
                            <a href='#' className={styles.link}>help & support</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.copyright}><span className={styles.symbals}>&copy; 2025</span>honey gold. all rights reserved</div>
                <div className={styles.socialLinkContainer}>
                    <span className={styles.headingExtraSmallBlack}>follow us</span>
                    <div className={styles.socialLink}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        <FontAwesomeIcon icon={faXTwitter} className={styles.icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
