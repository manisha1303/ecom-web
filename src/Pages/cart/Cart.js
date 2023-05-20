import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
// import { Product } from "../shop/product";
import { ShopContext } from "../../Context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { useNavigate } from "react-router-dom";

import "react-confirm-alert/src/react-confirm-alert.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="title">
        <h1>Your Cart Items</h1>
      </div>
      {/* mapping the products ans matching into useState where product is added into cart */}
      <div className="">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        //available whn cart is not empty
        <div className="checkoutbtn">
          <p>Subtotal: Rs.{totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
      ) : (
        //available when cart is empty
        <div className="checkoutbtn">
          <h1>Cart is Empty</h1>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};