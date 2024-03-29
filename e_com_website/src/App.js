import React,{useEffect} from "react"
import './App.css';
import Header from './Header';
import Home from "./Home"
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";


function App() {
  const promise = loadStripe(
    // "pk_test_51Jlmj8FznHMyqGge8smxpB4k2Rdxi4fQQIZ6aROGZZMaZjzxkVU9a1xMcLTo0JtNwoRdNpynQnD2vaEMgcBrJhUA0089Kfftex"
       "pk_test_51LQzpVANcASM6QoVkzH4iHNA9Pd7Du05ctQ9vq9omegrf0FXavfIljKYrJEby5kFMysfLYfXtz5lVn6Tq08nQHSq00YaMV60ib"
    );
  const [{} , dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
     
    <Router>
    <div className="app">
    <Switch>
    {/* <Header/> */}
   <Route path="/login">
      <Login/>
      </Route>
      <Route path="/orders">
      <Orders/>
      </Route>

      <Route path="/checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route path="/payment">
      <Header/>
      <Elements stripe={promise}>
        <Payment />
            </Elements>
      </Route>
      <Route path="/">
      <Header/>
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
