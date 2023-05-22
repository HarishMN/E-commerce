import React, { useContext } from "react";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from "./items";
// import { products } from "../constants/products"
import { CartContext } from "./AddtoCart";

const ContextCart = () => {
    // const [item, setItem] = useState(products);

    const { item, clearCart } = useContext(CartContext);

    if(item.length === 0) {
        return(
            <>
               <header>
            <div className="continue-shopping">
                <img src="../images/back.png" alt="back"  className="arrow-icon"/>
                <h3>continue shopping</h3>
            </div>
            <div className="cart-icon">
                <img src="../images/shopping-cart.png" alt="cart" />
                <p>0</p>
            </div>
             </header>
            <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count"> 0</span> items in shopping cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                    <Scrollbars>
                        {
                            item.map((curItem) => {
                                return (
                                    <Items key={ curItem.id } {...curItem}/>
                                )
                            })
                        }
                    </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total : ₹.<span>0</span></h3>
                    <button>checkout</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            </section> 
            </>
        )
    }

    return(
        <>
            <header>
            <div className="continue-shopping">
                <img src="../images/back.png" alt="back"  className="arrow-icon"/>
                <h3>continue shopping</h3>
            </div>
            <div className="cart-icon">
                <img src="../images/shopping-cart.png" alt="cart" />
                <p>7</p>
            </div>
             </header>
            <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count"> 7</span> items in shopping cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                    <Scrollbars>
                        {
                            item.map((curItem) => {
                                return (
                                    <Items key={ curItem.id } {...curItem}/>
                                )
                            })
                        }
                    </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total : ₹.<span>20000</span></h3>
                    <button>checkout</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
        </>
    )
}

export default ContextCart;