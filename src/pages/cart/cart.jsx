import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import "./cart.css";
import { Product } from "../shop/product";



export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();


  function fetchOrder() {

    const data = {
      amount : 3,
      TotalPrice : 400,
      status	: "รอยืนยันคำสั่งซื้อ" ,
      user_id	: 21 
    };


    fetch('http://localhost:3333/orderinput', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  function fetchDetail() {

    const data = {
      menu_name	: "สลัดผัก",
      price	: "45",
      amount : "1",
      menuID : "1",
      orderID	 : "23"
    };

    
    fetch('http://localhost:3333/order_detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="cart">
      <Navbar/>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>


      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button id="check" onClick={() => {
              fetchOrder();
              fetchDetail();
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

