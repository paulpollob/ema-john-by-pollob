import React, { useEffect } from 'react';
import { getFromDb } from '../utilities/fakedb';
import './Cart.css';

const Cart = (props) => {

    
    const {cart, children} = props;
    let total = 0;
    let shipping = 0;
    let tax = 0;
    useEffect(()=>
    {
        const data = getFromDb();
    },[]);
    console.log("hare Krishna from cart: ");
    console.log(cart);
    
    for(const scart of cart) {
        total+=(scart.price);
        shipping+=scart.shipping;
    }
    tax = parseFloat((total*0.1).toFixed(2));
    const grandTotal = total+shipping+tax;
    console.log("hare krishna my children is: ", children)
    return (
        <div className = "cart">
            <h2>Order Summury</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
            {children}
        </div>
    );
};

export default Cart;