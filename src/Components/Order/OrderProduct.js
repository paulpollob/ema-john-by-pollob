import React from 'react';
import "./OrderProduct.css"

const OrderProduct = ({ item }) => {
    return (
        <div className='Item'>
            <img src={item.img} alt="img of shoes."></img>
            <div className='details'>
                <h5>{item.name}</h5>
                <p>Price: ${item.price}</p>
                <p>Shipping: ${item.shipping}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        </div>
    );
};

export default OrderProduct;