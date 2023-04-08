import React, { useState } from 'react'
import { Navbar } from "../../components/navbar";
<<<<<<< HEAD
import axios from 'axios';
//import RECIEPT from "./"
// Get the file input element and the upload button

=======
import RECIEPT from "../../receipt/Owner.png"
>>>>>>> f457d63bde649bf8e80872fc1520b7de9ed8fef7

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
        <input type="file" name='file' onChange={handleImage}/>
        <button onClick={handleApi}>Submit</button>
      </div>
      <img src={RECIEPT} />
    </div>
    
  )
}