import React from 'react';
import styles from './categories.module.css';
import { categories } from '../../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { actions } from '../../../redux/actions';

const Categories = ({ toggleNestedNavDisplay }) => {

    const category = categories.map(c => <div key={c.id} className={styles.wrapper}>
        <h3 className={styles.headingSmallBlack}>{c.title}</h3>
        <ul className={styles.lists}>
            {
                c.category.map(li => <li key={li} className={styles.list}>
                    <a href='#' className={styles.link}>{ li }</a>
                </li>)
            }
        </ul>
    </div>)

    return (
        <div className={styles.container}>
            <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={toggleNestedNavDisplay}>
                    <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
                </div>
            </div>
            <div className={styles.listContainer}>
                {category}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleNestedNavDisplay: () => dispatch({ type: actions.TOGGLE_NESTED_NAV_DISPLAY })
    }
}

export default connect( null, mapDispatchToProps ) (Categories);
