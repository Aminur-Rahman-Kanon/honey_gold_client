import React, { useEffect, useState } from 'react';
import styles from './rightPanel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { getCartItems, getTotalPrice } from '../../utilities/utilities';

const RightPanel = () => {

    const [cartItem, setCartItem] = useState(() => getCartItems());
    const [total, setTotal] = useState(() => getTotalPrice());

    useEffect(() => {
        const getItemCount = () => {
            const item = getCartItems()
            const price = getTotalPrice();
            setCartItem(item);
            setTotal(price);
        }
        window.addEventListener('storage', getItemCount);
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
                </div>
                <div className={styles.item}>
                    <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
                    <span className={styles.counter} style={cartItem ? {display: 'flex'} : {display: 'none'}}>{cartItem ? cartItem.length : 0}</span>
                    <div className={styles.cartWrapper}>
                        <div className={styles.cart} style={cartItem ? {minHeight: '100px'} : {height: 'auto'}}>
                            {
                                cartItem ? cartItem.map(itm => <div className={styles.cartContainer}>
                                    <div className={styles.imgContainer}>
                                        <img src={itm.img[0].img} alt={itm.title} className={styles.img} />
                                    </div>
                                    <div className={styles.details}>
                                        <h3 className={styles.headingSmall}>{itm.title}</h3>
                                        <span className={styles.price}>&#163;{Number(itm.price.original) - Number(itm.price.discounted)}</span>
                                    </div>
                                </div>)
                                :
                                <span className={styles.textSmall}>no item in the cart</span>
                            }
                        </div>
                        <div className={styles.btns} style={cartItem ? {display: 'flex'} : {display: 'none'}}>
                            <div className={styles.totalContainer} style={total ? {display: 'flex'} : {display: 'none'}}>total: &#163;{total}</div>
                            <button className={styles.btn}>checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPanel;
