import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();

        auth()
        .signInWithEmailAndPassword (email, password)
        .then((auth) => {            
            if (auth){
                history.push("/")
            }
        })
        .catch (error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth()
        .createUserWithEmailAndPassword (email, password)
        .then((auth) => {            
            if (auth){
                history.push("/")
            }
        })
        .catch (error => alert(error.message))
    }

    return ( 
        <div className = "login">
            <Link to = "/" >
                 <img className = "login__logo" alt="" src= "/images/bookworm2.png" />
            </Link>

            <div className = "login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type = "text" value = {email} 
                    onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type = "password" value = {password} 
                    onChange = {e => setPassword(e.target.value)} />

                    <button type= "submit" onClick = {signIn} className = "login__signInButton">Sign-In</button>
                </form>

                <p>
                    By signing in you do not agree to Calabash's conditions of Use and Sale because they don't currently exist.
                </p>
                <div className = "login__bottomButtons">
                    <button type= "submit" onClick = {register} className = "login__registerButton">Create New Bookworm Account</button>
                    <button type= "submit" onClick = {register} className = "login__demoButton">Demo Sign-in</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Login