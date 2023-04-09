import React from "react";
import { Navbar } from "../components/navbar";
import Axios from "axios";
import { useState } from "react";

export const HistoryCus = (props) => {
    const [orderhis, setorderhis] = useState([]);

    const setSec = (id) => {
        props.setUserID(id);
      }
      //setSec(11);
    console.log(props.UserID);

    Axios.get("http://localhost:3333/history").then((response) => {
    setorderhis(response.data);
    });

    console.log("yea")

  return (
    <>
    <div className="history">
      <Navbar/>
      <h1>HISTORY</h1>
      <div>
      </div>
    </div>
    {orderhis.map((val)=>{
           return (
            <div>
                <h3> OrderID  {val.orderID} </h3>
                <h3>amount  {val.amount }</h3>
                <h3>TotalPrice  {val.TotalPrice} bath</h3>
            </div>
           );
        })}
    </>
  );
};
