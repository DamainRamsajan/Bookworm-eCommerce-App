import React from 'react';
import { Link } from 'react-router-dom';
import "./CartPopup.css";
// import CheckoutProduct from './CheckoutProduct';
// import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function CartPopup() {
    return (
        <div >
            <div className = "cartPopup__top">
                <Link to ="/checkout">  <button className = "cartPopup">View Cart</button> </Link>
                
            </div>
           
            <Subtotal/>
        </div>
    )
}

export default CartPopup
