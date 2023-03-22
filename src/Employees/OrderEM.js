
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LoginIcon from '@mui/icons-material/Login';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HistoryIcon from '@mui/icons-material/History';
import Divider from '@mui/material/Divider';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import Chip from '@mui/material/Chip';
import { useState } from "react";
import Axios from "axios";

import React from 'react';
import OrderDetails from './OrderDetails';

function ColorButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Chip
      style={{ backgroundColor: isClicked ? "green" : "lightgray" }}
      onClick={() => setIsClicked(!isClicked)}
    >
    </Chip>
  );
}


function OrderEM() {
  const [user, setUser] = useState([]);
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  
  const myStyle = {
    color: "white",
    backgroundColor: "green"
  };
  const myStyle2 = {
    fontFamily: "Sans-Serif"
  };
  const myStyle3 = {
    fontFamily: "Sans-Serif",
    backgroundColor: "pink"
  };

    Axios.get("http://localhost:3333/user").then((response) => {
      setUser(response.data);
    });
    Axios.get("http://localhost:3333/menu").then((response) => {
      setMenu(response.data);
    });


    Axios.get("http://localhost:3333/order").then((response) => {
      setOrder(response.data);
    });

    
  return (
    <>

      <Navbar bg="dark" variant="dark" sticky="top"expand="md" >
        <Container>
          <Navbar.Brand >
            <h3 style={myStyle2} >Order</h3>
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
              <p>Menu: {val.menuName}</p>
              </div>
            </div>
            );
          })}
        </div>

 */}
          {/* ดึงorder */}
          {/* <OrderDetails /> */}
          
            {order.map((val) => {
              return (
                <div style={myStyle2} >
                  <br></br>
                  <p align='left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                  OrderNo: {val.orderNo}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  OrderID: {val.orderID} </p>
                  <p style={myStyle2} >user_id : {val.user_id }</p>
                  <p>menuID: {val.menuID}
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {val.quantity}</p>
                  <p>TotalPrice: {val.TotalPrice}</p>
                  <br></br><br></br>
                
                  {/* style={{backgroundColor: "lightblue"}}   */}

                  <ColorButton>
                  <Chip icon={<HourglassTopRoundedIcon/>}  label="รอยืนยันคำสั่งซื้อ"  /></ColorButton> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                  
                  <KeyboardDoubleArrowRightRoundedIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Chip icon={<InventoryRoundedIcon  />} label="ยืนยันคำสั่งซื้อ"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <KeyboardDoubleArrowRightRoundedIcon /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Chip icon={<LocalDiningRoundedIcon />} label="กำลังเตรียม" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <KeyboardDoubleArrowRightRoundedIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Chip icon={<AssignmentTurnedInRoundedIcon />} label="เสร็จสิ้น" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 
                  
                 <div>
                </div>
                  <Divider size="10px"></Divider>

                  </div>
                  
                );
                
            })}
          
         
    </>
    
    
  );
}

export default OrderEM;