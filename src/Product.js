import React from 'react';
import "./Product.css"

function Product() {
    return (
        <div className = "product">
            <div className = "product__info">
                <p>Title</p>
                <p className = "product__price">
                    <small>$</small>
                    <strong>19:99</strong>
                </p>
                <div className = "product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>

            <img src = "/images/pride.jpg" alt ="" />

            <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
