import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
// import { Product } from "../shop/product";
import { ShopContext } from "../../Context/shop-context";
import { WishlistItem } from "./wishlist-item";
import "./wishlist.css";
// import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const { wishlistItems } = useContext(ShopContext);
  // const totalAmount = getTotalCartAmount();
  // const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="title">
        <h1>Your Whislist Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (wishlistItems[product.id] !== 0) return <WishlistItem data={product} />;
        })}
      </div>
    </div>
  );
};