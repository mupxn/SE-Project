import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import Axios from "axios";

function OrderDetails(props) {
  const [order, setOrder] = useState([]);
  Axios.get("http://localhost:3333/order").then((response) => {
    setOrder(response.data);
  });
  const [count, setCount] = useState(0);

  return (
          <div >
            {/* <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div> */}
            {order.map((val) => {
              return (
                <div>
                  <br></br>
                  <p align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  OrderNo: {val.orderNo}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  OrderID: {val.orderID} </p>
                  <p >user_id : {val.user_id }</p>
                  <p>menuID: {val.menuID}
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {val.quantity}</p>
                  <p>TotalPrice: {val.TotalPrice}</p>
                  <br></br><br></br>
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