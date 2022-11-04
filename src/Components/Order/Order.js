import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext';
import Cart from '../Cart';
import OrderProduct from './OrderProduct';
import "./Order.css"
import { Link } from 'react-router-dom';

const Order = () => {
    const { cart, orderdItem } = useContext(AuthContext);
    return (
        <div className="shop-container">
            <div className="ordered-container">
                {
                    cart.map(item =>
                        <OrderProduct key={cart.id} item={item} ></OrderProduct>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={"/shipping"}>
                        <button>Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;