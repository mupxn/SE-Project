import React from "react";
import { Navbar } from "../components/navbar";
import Axios from "axios";
import { useState } from "react";
import Divider from '@mui/material/Divider';
import { Chip } from '@mui/material';

export const HistoryCus = () => {
    const [orderhis] = useState([]);
    const [orderfinish, setorderfinish] = useState([]);
    const myStyle2 = {
    fontFamily: "Sans-Serif",
    padding : "40px"
    };
    const myStyle3 = {
    fontFamily: "Sans-Serif",
    fontSize :"40px"
    };

    Axios.get("http://localhost:3333/orderfinish").then((response) => {
    orderhis(response.data);
    });

  return (
    <div className="history">
      <Navbar/>
      <h1>HISTORY</h1>
      {orderhis.map((val) => {
        return (
          <div style={myStyle2} >
            <br></br>
            <text style={myStyle2} > OrderID  {val.orderID} </text>
            <text style={myStyle2} >amount  {val.amount }</text>
            <text style={myStyle2} >TotalPrice  {val.TotalPrice} bath</text>
            <b><Chip color='primary' label={val.status}  ></Chip></b>
            
            <br></br><br></br>
            <Divider size="10px"></Divider>


            </div>
            
          );
          
      })}
    </div>
  );
};
