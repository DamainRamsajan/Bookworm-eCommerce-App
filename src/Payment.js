import React from 'react';
import "./Payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import { Link } from 'react-router-dom';

function Payment() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className ="payment">
            <div className = "payment__container">

                <h1>
                    Checkout (<Link to= "/checkout">{basket?.length} Items</Link>)
                </h1>

                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Billing Addresss</h3>
                    </div>
                    <div className = "payment__address">
                        <h3>{user?.email}</h3>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
