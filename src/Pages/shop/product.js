import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../Context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, addToWishlist } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="NICE"/>
      <div className="discription">
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs. {price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          AddToCart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <button className="addToCartBttn" onClick={() => addToWishlist(id)}>
          AddToWishlist
        </button>
      </div>
    </div>
  );
};