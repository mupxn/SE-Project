import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="navbar">
      <div className="links">
        <Link to="/shop"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>

      <div className="shopTitle">
        <h1>Salad Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
