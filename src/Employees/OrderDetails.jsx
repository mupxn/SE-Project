import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import Axios from "axios";

function OrderDetails(props) {
  const myStyle2 = {
    fontFamily: "Sans-Serif",
    padding : "40px"
  };
  const [orderconfirmation, setorderconfirmation] = useState([]);
  Axios.get("http://localhost:3333/orderconfirmation").then((response) => {
    setorderconfirmation(response.data);
  });
  const [count, setCount] = useState(0);
  
  return (
          <div >
            <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div> */
          {orderconfirmation.map((val) => { 
              return (
                <div>
                  <text style={myStyle2} > OrderID: {val.orderID} </text>
                  <text style={myStyle2} >amount : {val.amount }</text>
                  <text style={myStyle2} >TotalPrice: {val.TotalPrice}</text>
                  <text style={myStyle2} >{val.status}</text>
                  </div>
                  
                );
                
            })}
          </div>
    
  );
}
OrderDetails.defaultProps = {
  text: "Feedback UI",
}

export default OrderDetails;