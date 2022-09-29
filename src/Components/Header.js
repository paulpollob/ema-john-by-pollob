import React from 'react';
import './Header.css';
import logo from './../images/Logo.svg';
const Header = () => {
    return (
        <div>
            <header>
                <img src={logo} alt="Logo"/>
                <div id = "manu"> 
                    <a href='./order'>Order</a>
                    <a href='./orderReview'>Order Rebiew</a>
                    <a href='./mangeInventory'>Manage Inventory</a>
                    <a href='./login'>Login</a>
                </div>
            </header>
        </div>
    );
};

export default Header;