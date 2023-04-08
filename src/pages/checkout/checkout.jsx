import React, { useState } from 'react'
import { Navbar } from "../../components/navbar";
import RECIEPT from "../../receipt/Owner.png"
import axios from 'axios';

export const Checkout = () => {
  const [image , setImage] = useState('')
  function handleImage(e) {
    console.log(e.target.file)
    setImage(e.target.files[0])
  }

  function handleApi(){
    const formData = new formData()
    formData.append('image',image)
    axios.post('url' , formData).then((res) => {
      window.location = '/status'
      console.log(res)
    })
  }
  return (
    <div>
      <Navbar/>
      <div>
        <h1>Please Scan QR Code</h1>
        <img src={RECIEPT} />
      </div>
      <h4>ส่งใบเสร็จชำระเงินที่นี่</h4>
      <input type="file" name='file' onChange={handleImage}/>
      <button onClick={handleApi}>Submit</button>
    </div>
    
  )
}