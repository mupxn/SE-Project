import React from "react";
import { Navbar } from "../components/navbar";
import { useState, useEffect } from 'react';

export const HistoryCus = (props) => {
    const [orderhis, setorderhis] = useState([]);
    const [isMounted, setIsMounted] = useState(true);


  fetch(`/history?userID=${encodeURIComponent(props.UserID)}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  useEffect((props) => {
    fetchData();
    // cleanup function to set isMounted to false when component unmounts
    return () => {
      setIsMounted(false);
    };
  }, []);

  function fetchData() {
    fetch("http://localhost:3333/history")
      .then(response => response.json())
      .then(data => {
        if (isMounted) {
          setorderhis(data); // set the state only if component is still mounted
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

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
