import React, { useState } from 'react'
import { Navbar } from "../../components/navbar";
import RECIEPT from "../../receipt/Owner.png"
import axios from 'axios';

export const Checkout = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1>Please Scan QR Code</h1>
        <img src={RECIEPT} />
      </div>
      <input type="file" name='image'/>

      <button>Submit</button>
    </div>
    
  )
}