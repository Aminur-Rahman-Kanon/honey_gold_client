import React from 'react';
import styles from './navbar.module.css';
import Categories from './categories/categories';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';

const Navbar = ({ toggleNestedItemDisplay }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.nav}>
                <li className={styles.navItem}>
                    <a href='#' className={styles.link}>Home</a>
                </li>
                <li className={styles.navItem}>
                    <div className={styles.link} onClick={toggleNestedItemDisplay}>Shop</div>
                    <div className={styles.child}>
                        <Categories />
                    </div>
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

const mapDispatchToProps = dispatch => {
    return {
        toggleNestedItemDisplay: () => dispatch({ type: actions.TOGGLE_NESTED_NAV_DISPLAY })
    }
}

export default connect(null, mapDispatchToProps) (Navbar);
