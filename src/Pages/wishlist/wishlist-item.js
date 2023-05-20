import React, { useContext } from "react";
import "./wishlist.css";
import { ShopContext } from "../../Context/shop-context";

export const WishlistItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { removeFromWishlist, addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="cartItem">
      <img src={productImage} alt="img"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs.{price}</p>
        <button className="btnbutton" onClick={() => addToCart(id)}>
          AddToCart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <button
          className="btnbutton"
          onClick={() => removeFromWishlist(id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};