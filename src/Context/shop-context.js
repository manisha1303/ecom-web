import React, { createContext, useState } from "react";
import { PRODUCTS } from "../product";

//using context API

// this is like a store in application where it wll keep track of states and functions tht need to be accessed every in a project
export const ShopContext = createContext(null);

//creating an array and function to represent intial state of the cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};
//creating an array and function to represent intial state of the WishList
const getDefaultWishlist = () => {
  let list = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    list[i] = 0;
  }
  return list;
};

// define our state and everything that is related to logic
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);
  const [wishlistItems, setWishlist] = useState(getDefaultWishlist);

  //totalCheckOutAmount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const addToWishlist = (itemId) => {
    setWishlist((prev) => ({ ...prev, [itemId]: 1 }));
  };
  const removeFromWishlist = (itemId) => {
    // console.log("called");
    setWishlist((prev) => ({ ...prev, [itemId]: 0 }));
  };
  const clearCart = () => {
    // console.log("haiiii");
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        setCartItems((prev) => ({ ...prev, [item]: 0 }));
      }
    }
  };
  //Adding to cart
  const addToCart = (itemId) => {
    //cart items array or object
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  //Removing from cart
  const removeFromCart = (itemId) => {
    //cart items array or object
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  //updating cart item through txtbox by passing new valve and id
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    // checkout,
    addToWishlist,
    removeFromWishlist,
    clearCart,
  };
  return (
    //wrappring all inside <shopContext.Provider>
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};