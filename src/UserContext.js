import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from './fakeData/firebase.init';
import { getFromDb } from './utilities/fakedb'; 

const AuthContext = createContext();
export { AuthContext };
const auth = getAuth(app);






const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [orderdItem, setItem] = useState([]);



//--------------------------------------------------------------------------------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const LogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
//--------------------------------------------------------------------------------




    //////////////////////////////////////////////////////////////////////////////
    useEffect(
        () => {
            fetch('products.json')
                .then(res => res.json())
                .then(data => setProducts(data));
        },
        []);
// -------------------------------------------------------------------

        useEffect(()=>{
        let tempData = [];
        let tempDataOrdered = [];
        if(products.length!==0){
            const orders = getFromDb(); 
            for (const order in orders) {
                const data = products.find((product) => product.id === order);
                console.log("MY data is from context: ", data);
                data.quantity = orders[data.id];
                tempDataOrdered.push(data);
                // for(let i = 0; i<orders[order]; i++)
                // {
                //     tempData.push(data);
                // }
                tempData.push(data);
                console.log(" Hare Krishna NOw my cart is: ", cart);
            }
            setItem(tempDataOrdered);
            setCart(tempData);
        }
        }, [products]);
        
        /////////////////////////////////////////////////////////////////////////////




        ////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user: ", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);
        ////////////////////////////////////////////////////////////////////////////




        ////////////////////////////////////////////////////////////////////////////
    // const user = {name: "Krishna", email: "Krishna@radhe.com"};
    const authInfo = { loading, createUser, LogIn, logOut, user, setUser, products, setProducts, cart, setCart, orderdItem, setItem};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;