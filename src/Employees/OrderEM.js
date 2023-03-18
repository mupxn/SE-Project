import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HistoryIcon from '@mui/icons-material/History';

import { useState } from "react";
import Axios from "axios";
function OrderEM() {
  const [user, setUser] = useState([]);
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3333/user").then((response) => {
      setUser(response.data);
    });
  };
  const getMenu = () => {
    Axios.get("http://localhost:3333/menu").then((response) => {
      setMenu(response.data);
    });
  };

    Axios.get("http://localhost:3333/order").then((response) => {
      setOrder(response.data);
    });


  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top"expand="md" >
        <Container>
          <Navbar.Brand >
            <h3>Order</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
           <Nav className="justify-content-right">
            <Nav.Link href="AlertOrder" ><NotificationsIcon/></Nav.Link>
            <Nav.Link href="History" ><HistoryIcon/></Nav.Link>
            <Nav.Link href="/" ><LoginIcon/></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      

      {/* <div className="user">
        <button class="btn btn-primary" onClick={getUser}>
          Show Employees
        </button>
        <br />
        <br />
        {user.map((val) => {
          return (
            <div className="user card" >
              <div className="card-body text-left">
              <p className="card-text" >ID: {val.id}</p>
                <p className="card-text">Name: {val.fname}</p>
                <p className="card-text">LastName: {val.lname}</p>
                <p className="card-text">Phone: {val.number}</p>
              </div>
            </div>
            );
          })}
        </div>

        <div className="menu">
        <button class="btn btn-primary" onClick={getMenu}>
          Show menu
        </button>
        <br />
        <br />
        {menu.map((val,key) => {
          return (
            <div className="menu card" >
              <div className="card-body text-left">
              <p className="card-text">MenuNo: {val.menuID}</p>
              </div>
            </div>
            );
          })}
        </div>

 */}
 
          {/* ดึงorder */}
        {order.map((val) => {
          return (
            <div className="order card " >
              <p align='left'>OrderNo: {val.orderNo}</p>
              <p>OrderID: {val.orderID}</p>
              <p>user_id : {val.user_id }</p>
              <p>menuID: {val.menuID} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {val.quantity}</p>
              <p>TotalPrice: {val.TotalPrice}</p>
              </div>
            );
          })}



    </>
    
    
  );
}

export default OrderEM;