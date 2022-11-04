import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { AuthContext, createUser } from '../UserContext';
import './SignUp.css';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState("");
    const formHandler = (event)=>
    {
        event.preventDefault();
        console.log("event", event);
        const form = event.target;
        console.log(form);
        const email = form.email.value;
        const password = form.password.value;
        const cnfrmpss = form.confirmPassword.value;

        if(password.length < 6)
        {
            setError("password length should be greater than 6");
            return;
        }
        else setError("");
        if(password !== cnfrmpss)
        {
            setError("Your password did not matched");
            return;
        }
        else setError("");

        console.log(createUser);

        createUser(email, password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            form.reset();
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
    return (
        <div className='SignUp'>
            <form onSubmit={formHandler} className='SignUpForm'>
                <div className='block'>
                    <small>Email</small><br></br>
                    <input type={'email'} name="email" placeholder='Enter Your email'></input><br></br>
                </div>
                <div className='block'>
                    <small>Password</small><br></br>
                    <input type={'password'} name="password" placeholder='Password'></input><br></br>
                </div>
                <div className='block'>
                    <small>Confirm Password</small><br></br>
                    <input type={'password'} name="confirmPassword" placeholder='Confirm Password'></input><br></br>
                </div>
                <button type='submit'>Sign Up</button>
                {(error)?<h5 className='error'>{error}</h5>:<small className='success'>registered Successfully</small>}
            </form>
            <small>Already have an account? <Link to={"/logIn"}>Log In</Link></small>
            <hr></hr>or<hr></hr>
            <button>Sign In with Google</button>
            
        </div>
    );
};

export default SignUp;