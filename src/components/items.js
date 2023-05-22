import React, { useContext } from "react";
import { CartContext } from "./AddtoCart";

const Items = ({id,title,product_img,price,type,quantity}) => {

    const {removeItem, increment, decrement} = useContext(CartContext)

    return (
        <>
            <div className="items-info">
                 <div className="product-img">
                    <img src={ product_img } alt="image"/>
                </div>
                <div className="title">
                    <h2>{ title }</h2>
                    <p>{ type }</p>
                </div>
                <div className="add-minus-quantity">
                    <i className=" fas fa-minus minus" onClick={() => decrement(id)}></i>
                    <input type="text" placeholder={ quantity } />
                    <i className="fas fa-plus add" onClick={() => increment(id)}></i>
                </div>
                <div className="price">
                    <h3>₹.{ price }</h3>
                </div>
                <div className="remove-item">
                    <i className="fas fa-trash-alt remove" onClick={() => removeItem(id)}></i>
                </div>
            </div>
            <hr />   
        </>
    )
}

export default Items