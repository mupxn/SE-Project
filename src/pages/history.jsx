import React from "react";
import { Navbar } from "../components/navbar";
import { useState, useEffect } from 'react';
import axios from "axios";

export const HistoryCus = (props) => {


    const [orderhis, setorderhis] = useState([]);
    var userID = props.UserId;

  fetch('http://localhost:3333/history')
  .then(response => response.json())
  .then(data => {
    setorderhis(data);
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
  

  return (
    <>
    <div className="history">
      <Navbar/>
      <h1>HISTORY</h1>
      <div>
      {orderhis.map((val) => {
              return (
                <div >
                  <br></br>
                  <text> OrderID  {val.orderID} </text>
                  <text>amount  {val.amount }</text>
                  <text >TotalPrice  {val.TotalPrice} bath</text>
                  <br></br><br></br>
                  </div>
                );
            })}

      </div>
    </div>
    </>
  );
};
