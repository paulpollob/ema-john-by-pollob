import React, { useContext, useEffect, useState } from 'react';
import Product from './Product'
import './Shop.css';
import Cart from './Cart';
import { addToDb } from '../utilities/fakedb';
import { AuthContext } from '../UserContext';
import { Link } from 'react-router-dom';


const Shop = () => {
    const { products, setProducts, cart, setCart, orderdItem, setItem } = useContext(AuthContext);




    // useEffect(
    //     ()=>{
    //         fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    //     }, []);

    useEffect(
        () => {
            console.log("cart: ", cart);
        }, [cart]
    );



    const eventHandeler = async (props) => {
        console.log(props)
        const tempData = cart.find((item) => item.id === props.id);
        if (tempData) {
            tempData.quantity++;
        }
        else {
            props.quantity++;
            await setCart([...cart, props]);
        }
        await addToDb(props.id);
    }
    const clearCart = () => {

    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product =>
                        <Product key={product.id} product={product} eventHandeler={eventHandeler}></Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={clearCart}>Clear Cart</button>
                    <Link to={"/order"}>
                        <button>Review Order</button>
                    </Link>

                </Cart>
            </div>
        </div>
    );
};

export default Shop;