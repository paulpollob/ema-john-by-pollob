import React, { useContext } from 'react';
import { AuthContext } from './UserContext';

const About = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            Hare Krishna
            <h4>About us.</h4>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default About;