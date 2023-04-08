import React from 'react'
import { Navbar } from "../../components/navbar";
import RECIEPT from "../../receipt/Owner.png"

export const Checkout = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1>Please Scan QR Code</h1>
      </div>
      <img src={RECIEPT} />
    </div>
  )
}