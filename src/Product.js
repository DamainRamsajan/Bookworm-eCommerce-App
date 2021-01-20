import React, { useState } from 'react';
import CartPopup from './CartPopup';
import "./Product.css"
import { useStateValue } from './StateProvider';
// import CloseIcon from "@material-ui/icons/Close"

function Product({id, title, image, price, rating }) {
    
    const [{basket}, dispatch] = useStateValue();
        
    const [basketActive, setBasketActive] = useState(false); 
   
    const addToBasket = () => {        
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
        if (basket.length >=0){
            setBasketActive(true)
        }else{
            setBasketActive(false)
        }
    }

    return (
        <div className = "product">
            <div className = "product__info">
                <p>{title}</p>
                <p>
                    Type {/* {fileType} */}
                    <strong>epub: </strong>
                    
                </p>
                <p className = "product__price">
                    Donation:
                    <small> $</small>
                    <strong>{price}.00</strong>
                </p>
                <div className = "product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}                    
                    
                </div>
            </div>

            <img src = {image} alt="" />

            <button onClick = {addToBasket} className = "product__button">Add to Basket</button>
            
            {basketActive && (
                    <div className = "product__basketPopup">
                        <CartPopup/>                        
                    </div>
            )}
        </div>
    )
}

export default Product
