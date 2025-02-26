import React, { useEffect, useState } from 'react';
import styles from './displayProduct.module.css';
import { connect } from 'react-redux';

const DisplayProduct = ({ products, category }) => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        if (products && category){
            if (category === 'all'){
                return setItem(products)
            }
            else {
                const filter = products.filter(p => p.category === category);
                if (filter.length) {
                    setItem(filter)
                }
                else {
                    setItem([]);
                }
            }
        }
    }, [products, category])

    console.log(category)

    const displayItem = item.length ? <div className={styles.container}>
        {
            item.slice(0, 6).map(p => <div key={p._id} className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    <img src={p.img[0].img} alt={p.title} className={styles.img} />
                    <div className={styles.slider}>
                        <span className={styles.textSmall}>quick look</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <h3 className={styles.headingSmallBlack}>{p.title}</h3>
                    <div className={styles.flexGroup}>
                        <s className={styles.flexItemStrike}>&#163;{p.price.original}</s>
                        <span className={styles.flexItemNormal}>&#163;{Number(p.price.original) - Number(p.price.discounted)}</span>
                    </div>
                </div>
            </div>)
        }
    </div>
    :
    <div className={styles.containerDefault}>
        <span className={styles.headingSmallBlack}>no item</span>
    </div>

    return (
        <div className={styles.main}>
            {displayItem}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    category: state.category
})

export default connect(mapStateToProps) (DisplayProduct);
