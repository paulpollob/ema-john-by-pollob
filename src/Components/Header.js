import React, { useContext } from 'react';
import './Header.css';
import logo from './../images/Logo.svg';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../UserContext';
import { signOut } from 'firebase/auth';
const Header = () => {
    const {user, logOut, setUser} = useContext(AuthContext);
    console.log("from header ", user)
    const navigate = useNavigate();
    const LogOutHandler = () =>
    {
        logOut().then(() => {
            
        navigate("/");
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          setUser({});
    }
    return (
        <div>
            <header>
                <img src={logo} alt="Logo"/>
                <div id = "manu"> 
                
                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/order"}>Order</Link>
                    <Link to={"/orderReview"}>Order Rebiew</Link>
                    <Link to={"/mangeInventory"}>Manage Inventory</Link>
                    {(user) ? <button onClick={LogOutHandler} to={"/login"}>Log Out</button>:
                    <Link to={"/login"}>Log In</Link>}
                    <Link to={"/signUp"}>Sign Up</Link>
                    <Link to={"/about"}>About</Link>
                    {user && <small>{user?.email}</small>}
                </div>
            </header>
        </div>
    );
};

export default Header;