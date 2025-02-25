import React from 'react';
import styles from './sidedrawer.module.css';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';
import SocialLinkContainer from '../socialLinkContainer/socialLinkContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Sidedrawer = ({ sidedrawer, toggleSidedrawer }) => {
    return (
        <div className={ sidedrawer ? `${styles.container} ${styles.open}` : styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.xBtnContainer} onClick={toggleSidedrawer}>
                    <FontAwesomeIcon icon={faXmark} className={styles.xBtn} />
                </div>
                <div className={styles.logo}>
                    <Logo />
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
        sidedrawer: state.sidedrawer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSidedrawer: () => dispatch({ type: actions.TOGGLE_SIDEDRAWER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidedrawer);
