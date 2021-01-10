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

function App() {

  const[{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged ((authUser) => {
      console.log ("the user is >>> ", authUser);

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
          </Route>

          <Route path = "/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path = "/">  
            <Header/>          
            <Home/>
          </Route>
        </Switch>        
      </div>
    </Router>
    
  );
}

export default App;
