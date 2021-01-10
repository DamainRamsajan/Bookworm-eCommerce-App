import React from 'react';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    
    console.log(basket)
    return (
        <div className = "checkout">
            <div className = "checkout__left">
                <img className = "checkout__ad" src = "/images/teslaAd.png" alt = ""/>               

               <div >
                   <h3>Hello, {user?.email}</h3>
                   <h2 className = "checkout__title">Your Shopping Basket</h2>
                   
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

            <div className = "checkout__right">
                <h1>Subtotals</h1>
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout
