import React from 'react';
import styles from './sidedrawer.module.css';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';
import Logo from '../logo/logo';
import SocialLinkContainer from '../socialLinkContainer/socialLinkContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Categories from '../navbar/categories/categories';

const Sidedrawer = ({ sidedrawer, nestedNavDisplay, toggleSidedrawer, toggleNestedNav }) => {
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
                    <ul className={styles.navLists}>
                        <li className={styles.navList}>
                            <a href='/' className={styles.navLink}>home</a>
                        </li>
                        <li className={styles.navList}>
                            <div className={styles.navLink} onClick={toggleNestedNav}>shop</div>
                        </li>
                        <li className={styles.navList}>
                            <a href='/' className={styles.navLink}>contact</a>
                        </li>
                        <li className={styles.navList}>
                            <a href='/' className={styles.navLink}>about</a>
                        </li>
                    </ul>
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
        toggleNestedNav: () => dispatch({ type: actions.TOGGLE_NESTED_NAV_DISPLAY })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Sidedrawer);
