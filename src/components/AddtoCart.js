import React, { createContext, useReducer } from "react";
import './cart.css'
// import img from '../asstes/Images/img1-cart.webp'

import { products } from "../constants/products"
import ContextCart from "./ContextCart";
import { reducer } from "./reducer"

export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
};

const Cart = () => {
    // const [item, setItem] = useState(products);
    const [state,dispatch] = useReducer(reducer, initialState)

    // to delete the indv elements from an Item Cart
    const removeItem = (id) => {
        return dispatch({
            type:"REMOVE_ITEM",
            payload: id,
        })
    }

    // clear Cart
    const clearCart = () => {
        return dispatch({
            type:"CLEAR_CART"
        })
    }

    // increment item
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        })
    }

    // decrement item
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        })
    }

    return (
        <>
            <CartContext.Provider value={{...state, removeItem,clearCart,increment, decrement}}>
                <ContextCart/>
            </CartContext.Provider>
            
        </>
    )
}

export default Cart;