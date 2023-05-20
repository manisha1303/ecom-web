import React from "react";
import { PRODUCTS } from "../../product";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className='container-fluid'>
      <div className='shopTitle'>
        <h1>Enjoy shopping!!!</h1>
      </div>
      <div className='products'>
        {/* from product.js loop all item and then mapped and wrapped the data in product, again it as to be return data = {product} is used... */}
        {PRODUCTS.map((product) => (
          <Product data = {product}/>
        ))}
      </div>
    </div>
  );
};