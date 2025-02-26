import React from 'react';
import styles from './homepage.module.css';
import Banner from '../../components/banner/banner';
import DisplayProducts from '../displayProducts/displayproducts';

const Homepage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.banner}>
                <Banner />
            </div>
            <div className={styles.displayProduct}>
                <DisplayProducts />
            </div>
        </div>
    )
}

export default Homepage;
