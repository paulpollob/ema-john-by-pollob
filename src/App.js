
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from "./Components/Shop"
import './App.css'; 
import Main from './Components/Main'; 
import SignIn from './Components/SignIn';
import SignUp from "./Components/SignUp";
import Order from "./Components/Order/Order"
import About from "./About";
import PrivateRoute from "./Components/routes/PrivateRoute";
import Shipping from "./Components/Shipping/Shipping";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>
        },
        {
          path: "/logIn",
          element: <SignIn></SignIn>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/order",
          element: <Order></Order>
        },
        {
          path: "/shop",
          element: <Shop></Shop>
        },
        {
          path: "/shipping",
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },
        {
          path: "*",
          element:  <div>Hare Krishna 404</div>
        }
      ]
    }
  ]);
  return (
    <RouterProvider router = {router}></RouterProvider>
    // <div>
    //   <Header></Header>
    //   <Shop></Shop>
    // </div>
  );
}

export default App;
