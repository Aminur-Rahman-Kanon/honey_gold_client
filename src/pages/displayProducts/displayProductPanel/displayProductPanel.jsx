import React, { useEffect, useState } from 'react';
import styles from './displayProductPanel.module.css';
import { connect } from 'react-redux';
import { actions } from '../../../redux/actions';

const DisplayProductPanel = ({ category, toggleProductCategory }) => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setInnerWidth(window.innerWidth));
    }, [])


    const displyPanel = innerWidth <= 767 ? <div className={styles.container}>
        <div className={styles.wrapper}>
            <select defaultValue={'Select category'} className={styles.select} onChange={(e) => toggleProductCategory(e.target.value)}>
                <option disabled className={styles.option}>Select category</option>
                <option className={styles.option}>all</option>
                <option className={styles.option}>fabric</option>
                <option className={styles.option}>haberdashery</option>
                <option className={styles.option}>jewellery</option>
                <option className={styles.option}>women's fabric</option>
            </select>
        </div>
    </div>
    :
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <button className={category === 'all' ? `${styles.btn} ${styles.active}` : styles.btn} onClick={() => toggleProductCategory('all')}>all</button>
            <button className={category === 'fabric' ? `${styles.btn} ${styles.active}` : styles.btn} onClick={() => toggleProductCategory('fabric')}>fabric</button>
            <button className={category === 'haberdashery' ? `${styles.btn} ${styles.active}` : styles.btn} onClick={() => toggleProductCategory('haberdashery')}>haberdashery</button>
            <button className={category === 'jewellery' ? `${styles.btn} ${styles.active}` : styles.btn} onClick={() => toggleProductCategory('jewellery')}>jewellery & watches</button>
            <button className={category === 'womens fabric' ? `${styles.btn} ${styles.active}` : styles.btn} onClick={() => toggleProductCategory('womens fabric')}>women's fabric</button>
        </div>
    </div>

    return (
        <div className={styles.container}>
            {displyPanel}
        </div>
    )
}

const mapStateToProps = state => ({
    category: state.category
})

const mapDispatchToProps = dispatch => ({
    toggleProductCategory: (value) => dispatch({ type: actions.TOOGLE_PRODUCT_CATEGORY, payload: value })
})

export default connect(mapStateToProps, mapDispatchToProps) (DisplayProductPanel);
