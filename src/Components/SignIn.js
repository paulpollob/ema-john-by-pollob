import React, { useContext, useState } from 'react';
import "./SignIn.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../UserContext';
import { signOut } from 'firebase/auth';


const SignIn = () => {
    const [error, setError] = useState("");
    const {LogIn} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const logIn = (event)=>
    {
        event.preventDefault();
        const form = event.target; 
        const email = form.email.value;
        const password = form.password.value; 
        


        LogIn(email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            form.reset();
            setError("");
            navigate(from, {replace: true});
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage);
            // ..
          });
    }
    const navigate = useNavigate();
    
    return ( 
        <div className='logIn'>
            <form onSubmit = {logIn}  className='logInForm'>
                <div className='block'>
                    <small>Email</small><br></br>
                    <input type={'email'} name="email" placeholder='Enter Your email'></input><br></br>
                </div>
                <div className='block'>
                    <small>Password</small><br></br>
                    <input type={'password'} name="password" placeholder='Enter Your password'></input><br></br>
                </div>
                <button type='submit'>Log In</button>
                <br></br>
                {error && <small className='error'>{error}</small>}
            </form>
            <small>New to Ema-John? <Link to={"/SignUp"}>Register</Link></small>
            <hr></hr>or<hr></hr>
            <button>Sign In with Google</button>
        </div>
    );
};

export default SignIn;