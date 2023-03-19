import * as React from 'react';
import product1 from "./assets/products/p1.jpg";
import product2 from "./assets/products/p2.jpg";
import product3 from "./assets/products/p3.jpg";
import product4 from "./assets/products/p4.jpg";
import product5 from "./assets/products/p5.jpg";
import product6 from "./assets/products/p6.jpg";
import product7 from "./assets/products/7.webp";
import product8 from "./assets/products/8.webp";

/*const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const jsonData = {
    id: data.get('id'),
  }

  fetch("http://localhost:3333/menu", {
  method: "POST", // or 'PUT'
  headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify(jsonData),
})
};*/


export const PRODUCTS = [

  {
    id: '01M',
    productName: "สลัดผัก",
    price: 45.0,
    productImage: product1,
  },
  {
    id: '02M',
    productName: "สลัดโรลปูอัด",
    price: 45.0,
    productImage: product2,
  },
  {
    id: 3,
    productName: "สลัดโรลหมูยอ",
    price: 45.0,
    productImage: product3,
  },
  {
    id: 4,
    productName: "สลัดโรลกุ้ง",
    price: 45.0,
    productImage: product4,
  },
  {
    id: 5,
    productName: "สลัดโรลไส้กรอก",
    price: 45.0,
    productImage: product5,
  },
  {
    id: 6,
    productName: "สลัดโรลรวม",
    price: 45.0,
    productImage: product6,
  },
];
