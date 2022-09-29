import React from 'react';
import './Product.css'

const Product = (props) => {
    const {eventHandeler, product} = props;
    const { img, name, price, seller, ratings} = product;
     
    return (
        <div className='product'>
            <img src={img} alt='Krishna' />
            <div className='productInfo'>
                <p className='product-Name'>{name}</p>
                <p className='price'>Price: {price}</p>
                <p className='seller'>Seller: {seller}</p>
                <p className='rating'>Rating: {ratings}</p>
            </div>
            <button onClick={() => eventHandeler(product)} className = "btn-cart">
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Product;