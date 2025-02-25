import React from 'react';
import styles from './drawtoggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions';

const Drawtoggle = ({ toggleSidedrawer }) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper} onClick={toggleSidedrawer}>
                <FontAwesomeIcon icon={faBarsStaggered} className={styles.icon}/>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSidedrawer: () => dispatch({ type: actions.TOGGLE_SIDEDRAWER })
    }
}

export default connect(null, mapDispatchToProps) (Drawtoggle);
