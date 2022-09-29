import React, { useEffect, useState } from 'react';
import Product from './Product'
import './Shop.css';
import Cart from './Cart';


const Shop = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(
        ()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
        }, []);

        const [cart, setCart] = useState([]);
        const [price, setPrice] = useState(0);


        const eventHandeler = async(props) => { 
            await setCart([...cart, props]);
            console.log(cart);
            console.log(props);
        }
    return (
        <div className = "shop-container">
            <div className = "products-container">
                {
                    products.map(product => 
                        <Product key = {product.id} product = {product} eventHandeler = {eventHandeler}></Product>
                        )
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;