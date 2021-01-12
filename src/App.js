import Header from "./Header"
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Download from './Download';
import Login from './Login';
import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import Footer from "./Footer";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51I8QuPA67WFEmKggh6y8ABeWGhLBEpZ36Yn6NkuVviFFUnop55HoJ4Zj13YPNGejDHxHN0Li0qbE0G6wOyQduhCS00QKtadD4u");

function App() {

  const[{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged ((authUser) => {      

      if (authUser){
        //the user is logged in
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })        
      }else{
        //the user is logged out
        dispatch ({
          type: 'SET_USER',
          user: null
        }) 
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])
  
  return (
    <Router>
      <div className="app">
        
        <Switch>  
          <Route path = "/download">
            <Download/>
          </Route>
          
          <Route path = "/login">
            <Login/>
            <Footer/>
          </Route>

          <Route path = "/checkout">
            <Header/>
            <Checkout/>
            <Footer/>
          </Route>

          <Route path = "/payment">
            <Header/>
            <Elements stripe = {promise}>
              <Payment/>
            </Elements>            
            <Footer/>
          </Route>

          <Route path = "/">  
            <Header/>          
            <Home/>
            <Footer/>
          </Route>
        </Switch>        
      </div>
    </Router>
    
  );
}

export default App;
