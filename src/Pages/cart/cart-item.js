import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../Context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} alt="img"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs. {price}</p>
        <div className="countHandler">
          <button
            className="btn btn-outline-danger"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className=" countTxt"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            className="btn btn-outline-primary"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};