import React from 'react'
import { Navbar } from "../../components/navbar";
import RECIEPT from "../../receipt/Owner.png"
import ImageResize from "image-resize";

const imageResize = new ImageResize({
  format: "RECIPT", // ไฟล์รูปภาพเป็น png
  quality: 0.5, // ปรับขนาดไฟล์รูปภาพให้เหลือครึ่งนึง
  width: 500, // ปรับขนาดรูปให้มีความกว้าง 500 px
});

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export const Checkout = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1>Please Scan QR Code</h1>
      </div>

    </div>
  )
}