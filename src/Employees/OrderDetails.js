import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import Divider from '@mui/material/Divider';
import Axios from "axios";

function OrderDetails() {

  const [order, setOrder] = useState([]);
  
  Axios.get("http://localhost:3333/order").then((response) => {
    setOrder(response.data);
  });

  return (
    <>
       <Navbar bg="dark" variant="dark" sticky="top"expand="md" >
        <Container>
          <Navbar.Brand >
          <Nav.Link href="OrderEM" > <ArrowBackIcon/> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          OrderDetails</Nav.Link>
            
          </Navbar.Brand>
          <Navbar.Toggle />
        
        </Container>
      </Navbar>
      <br/>
      
      <div >
            {order.map((val) => {
              return (
                <div>
                  <p align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OrderNo: {val.orderNo}</p>
                  <p>OrderID: {val.orderID}</p>
                  <p>user_id : {val.user_id }</p>
                  <p>menuID: {val.menuID}
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {val.quantity}</p>
                  <p>TotalPrice: {val.TotalPrice}</p>
                  
                  <Divider size="5"></Divider>
                  </div>
                  
                );
                
            })}
          </div>
    </>
    
  );
}

export default OrderDetails;