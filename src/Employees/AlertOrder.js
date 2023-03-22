import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import OrderDetails from './OrderDetails';

import { useState } from "react";
import Axios from "axios";

function AlertOrder() {
  const [order, setOrder] = useState([]);
  Axios.get("http://localhost:3333/order").then((response) => {
    setOrder(response.data);
  });


  return (
    <>
       <Navbar bg="dark" variant="dark" sticky="top"expand="md" >
        <Container>
          <Navbar.Brand >
            <h3>AlertOrder</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
        
          <Nav className="justify-content-right">
            <Nav.Link href="OrderEM" > <HomeIcon/></Nav.Link>
            <Nav.Link href="/" ><LoginIcon/></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <br/>
      <div align="center" >
        <h5 >Order</h5>
      </div>
      {/* *********** */}
      <OrderDetails/>
    <br/>
    </>
    
  );
}

export default AlertOrder;