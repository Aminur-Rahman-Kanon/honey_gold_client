import React from 'react';
import styles from './displayProducts.module.css';
import DisplayProduct from './displayProduct/displayProduct';
import DisplayProductPanel from './displayProductPanel/displayProductPanel';

const DisplayProducts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <DisplayProductPanel />
            </div>
            <div className={styles.body}>
                <DisplayProduct />
            </div>
        </div>
    )
}

export default DisplayProducts;
