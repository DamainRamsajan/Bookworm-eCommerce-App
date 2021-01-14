import React from 'react';
import { Link } from 'react-router-dom';
import "./CartPopup.css";
import Subtotal from './Subtotal';


function CartPopup() {
    return (
        <div >
            <div className = "cartPopup__topBar">
                <Link to ="/checkout">  
                    <button className = "cartPopup__button">
                        View Cart
                    </button> 
                </Link>                
            </div>           
            <Subtotal/>
        </div>
    )
}

export default CartPopup
