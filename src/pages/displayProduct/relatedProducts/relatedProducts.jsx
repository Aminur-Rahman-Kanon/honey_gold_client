import React from 'react';
import styles from './relatedProducts.module.css';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ products }) => {

    if (!products.length) return;

    return (
        <div className={styles.container}>
            <h2 className={styles.headingSmallBlack}>related products</h2>
            <div className={styles.productContaier}>
                {
                    products.map(prd => <Link to={`/product/${prd.title}`} key={prd._id} className={styles.product}>
                        <div className={styles.imgContainer}>
                            <img src={prd.img[0].img} alt={prd.title} className={styles.img} />
                        </div>
                        <div className={styles.detailsContainer}>
                            <h3 className={styles.headingExtraSmallBlack}>{prd.title}</h3>
                            <div className={styles.priceContaier}>
                                <s className={styles.textStrike}>&#163;{prd.price.original}</s>
                                <span className={styles.textNormal}>&#163;{Number(prd.price.original) - Number(prd.price.discounted)}</span>
                            </div>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    )
}

export default RelatedProducts;
