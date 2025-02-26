import React from 'react';
import styles from './sidedrawer.module.css';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';
import SocialLinkContainer from '../socialLinkContainer/socialLinkContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Categories from '../navbar/categories/categories';

const Sidedrawer = ({ sidedrawer, nestedNavDisplay, toggleSidedrawer }) => {
    console.log(nestedNavDisplay)
    return (
        <div className={ sidedrawer ? `${styles.container} ${styles.open}` : styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.xBtnContainer} onClick={toggleSidedrawer}>
                        <FontAwesomeIcon icon={faXmark} className={styles.xBtn} />
                    </div>
                </div>
                <div className={nestedNavDisplay ? `${styles.nestedItem} ${styles.slide}` : styles.nestedItem}>
                    <Categories />
                </div>
                <div className={styles.navbar}>
                    <Navbar />
                </div>
                <div className={styles.link}>
                    <SocialLinkContainer />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sidedrawer: state.sidedrawer,
        nestedNavDisplay: state.nestedNavDisplay
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSidedrawer: () => dispatch({ type: actions.TOGGLE_SIDEDRAWER }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidedrawer);
