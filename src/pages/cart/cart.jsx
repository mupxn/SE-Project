import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import "./cart.css";
import { Product } from "../shop/product";



export const Cart = () => {
  const userId = localStorage.getItem('userId');
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  let orderid; // Declare the variable outside the fetch method

  function fetchOrder() {
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
    const data = {
      amount : 2,
      TotalPrice : 90.00,
      status	: "รอยืนยันคำสั่งซื้อ" ,
      user_id	: userId
    };


    
  }

  fetch('http://localhost:3333/order_id')
  .then(response => response.json())
  .then(data => {
    orderid = data.someProperty; // Assign the value of the property to the variable
    console.log(orderid); // Output the variable to the console
  })
  .catch(error => console.error(error));

  function fetchDetail() {

    const data = {
      menu_name	: cartItems[PRODUCTS.productName],
      price	: cartItems[PRODUCTS.price],
      amount : cartItems[PRODUCTS.id],
      menuID : "1",
      orderID	 : orderid
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

