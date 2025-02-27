import React, { useState } from 'react';
import styles from './productContainer.module.css';
import Rating from '../rating/rating';
import { storeItem } from '../../../utilities/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const ProductContainer = ({ product }) => {

    
    const [btnSpinner, setBtnSpinner] = useState(false)
    
    const submitHandler = async (item) => {
        setBtnSpinner(true);
        await storeItem(item).then(res => {
            setBtnSpinner(false);
            return toast.success(`${item.title} added to cart`.toUpperCase());
        }).catch(err => console.log(err))
    }

    if (!Object.keys(product).length) return;
    
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.path}>{`home / products / ${product.category} / ${product.title}`}</span>
            </div>

            <div className={styles.body}>
                <div className={styles.imgContainer}>
                    <img src={product.img[0].img} alt={product.title} className={styles.img} />
                </div>

                <div className={styles.detailsContainer}>
                    <h2 className={styles.headingLargeBlack}>{product.title}</h2>

                    <div className={styles.priceContainer}>
                        <s className={styles.textStrike}>&#163;{product.price.original}</s>
                        <span className={styles.textMedium}>&#163;{Number(product.price.original) - Number(product.price.discounted)}</span>
                    </div>

                    <div className={styles.ratingContainer}>
                        <Rating amount={Number(product.rating)}/>
                    </div>

                    <div className={styles.textContainer}>
                        <p className={styles.textSmall}>{product.description}</p>
                    </div>

                    <div className={styles.colorContainer}>
                        {
                            product.color.map(clr => <span key={clr} className={styles.color} style={{backgroundColor: `${clr}`}}></span>)
                        }
                    </div>

                    <div className={styles.info}>
                        <div className={styles.label}>
                            material: {product.material ? product.material : null}
                        </div>
                        <div className={styles.label}>
                            pattern: {product.material ? product.pattern : null}
                        </div>
                    </div>

                    <div className={styles.btnContainer}>
                        <div className={styles.quantity}>
                            <span className={styles.label1}>qunatity</span>
                            <div className={styles.btns}>
                                <button className={styles.btn}>+</button>
                                <span className={styles.label2}>1</span>
                                <button className={styles.btn}>-</button>
                            </div>
                        </div>
                        <div className={styles.cart}>
                            <button className={styles.addBtn} onClick={() => submitHandler(product)}>{
                                btnSpinner ? <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.icon} />
                                :
                                <span className={styles.textBtn}>add to cart</span>
                            }</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <h3 className={styles.headingMediumBlack}>description</h3>
                <div className={styles.textContaier}>
                    <p className={styles.textSmall}>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductContainer;
