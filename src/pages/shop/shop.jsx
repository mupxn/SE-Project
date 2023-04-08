import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Navbar } from "../../components/navbar";
import { useEffect } from "react";


export const Shop = () => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch("http://localhost:3333/authen", {
      method: "POST", // or 'PUT'
      headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer'+token
    },
    })
    .then(response=> response.json())
    .then(data => {
      if(data.status === 'ok'){
        alert('authen success')
      }else{
          alert('authen failed')
          localStorage.removeItem('token')
          window.location = '/login'
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }, [])

  return (
    
    <div className="shop">
      <Navbar/>
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
