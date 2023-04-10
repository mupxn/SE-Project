import React, { useState } from 'react'
import { Navbar } from "../../components/navbar";
import RECIEPT from "../../receipt/Owner.png"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      <div>
        <h1>Please Scan QR Code</h1>
        <img src={RECIEPT} />
      </div>
      <button onClick={() => navigate("/history-customer")}> payment submit </button>
    </div>
  )
}