import React, { useState } from 'react';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from 'react-router-dom';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe ();
    const elements = useElements ();

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState (null);
    const [disabled, setDisabled] = useState (true);


    const handleSubmit = e => {

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }

    return (
        <div className ="payment">
            <div className = "payment__container">

                <h1>
                    Checkout (<Link to= "/checkout">{basket?.length} Items</Link>)
                </h1>

                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Billing Address</h3>
                    </div>
                    <div className = "payment__address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>Los Angelas, CA</p>
                    </div>
                </div>

                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Review Items and Download</h3>
                    </div>
                    <div className= "payment__items">
                        {basket.map(item => (
                          <CheckoutProduct 
                            id={item?.id}
                            title={item?.title}
                            image= {item?.image}                            
                            price={item?.price}
                            rating={item?.rating}                          
                          />
                        ))}
                    </div>                    
                </div>

                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className = "payment__details">
                        <form onSubmit = {handleSubmit}>
                            <CardElement onChange = {handleChange}/>

                            <div className = "payment__priceContainer">
                                <CurrencyFormat 
                                    renderText = {(value) => (                                        
                                            <h3>                            
                                                Order Total: 
                                                <strong> {value}</strong>                        
                                            </h3>
                                    )}
                                    decimalScale= {2}
                                    value = {getBasketTotal(basket)} 
                                    displayType = {"text"}   
                                    thousandSeparator = {true}
                                    prefix = {"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>
                                       {processing ? <p>Processing</p> : "Buy Now"} 
                                    </span>
                                </button>

                            </div> 
                        </form>                                               
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
