import React from "react";
import { Navbar } from "../components/navbar";
import Axios from "axios";
import { useState } from "react";

export const HistoryCus = () => {
    const [orderhis] = useState([]);

    Axios.get("http://localhost:3333/orderfinish").then((response) => {
    orderhis(response.data);
    });

  return (
    <div className="history">
      <Navbar/>
      <h1>HISTORY</h1>
      <div>
        {orderhis.map(()=>{
            console.log("yes")
        })}
      </div>
    </div>
  );
};
