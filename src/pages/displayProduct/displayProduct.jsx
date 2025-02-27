import React, { useEffect, useState } from 'react';
import styles from './displayProduct.module.css';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux'
import ProductContainer from './productContainer/productContainer';
import RelatedProducts from './relatedProducts/relatedProducts';

const DisplayProduct = ({ products }) => {

    const { productId } = useParams();
    const [item, setItem] = useState({});
    const [otherItem, setOtherItem] = useState([]);

    useEffect(() => {
        if (productId && products){
            const arrOriginal = [...products];
            const itemIndex = arrOriginal.findIndex(i => i.title === productId)
            const item = arrOriginal.at(itemIndex) || {};
            arrOriginal.splice(itemIndex, 1);
            if (Object.keys(item).length){
                setItem(item);
                const otherItem = arrOriginal.filter(prd => prd.category === item.category)
                setOtherItem(otherItem);
            }
        }
    }, [products, productId])
    
    return (
        <div className={styles.container}>
            <ProductContainer product={item} />
            <RelatedProducts products={otherItem}/>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(mapStateToProps) (DisplayProduct);
