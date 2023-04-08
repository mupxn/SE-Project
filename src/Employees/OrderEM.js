
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
import { Chip } from '@mui/material';
import Dropdown from 'react-bootstrap/Dropdown';

import Badge from '@mui/material/Badge';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import ListAltIcon from '@mui/icons-material/ListAlt';

import { useState } from "react";
import Axios from "axios";
import React from 'react';
import { Margin } from '@mui/icons-material';



function OrderEM() {
  const [user, setUser] = useState([]);
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderalert, setorderalert] = useState([]);


  const [status, setStatus] = useState("");
  const [newstatus, setNewStatus] = useState( );
  const [orderdetail, setorderdetail] = useState([]);
  


  const myStyle1 = {
    fontFamily: "Sans-Serif",
    padding : "10px",
    backgroundColor : "lightblue"
    
  };
  const myStyle2 = {
    fontFamily: "Sans-Serif",
    padding : "40px"
  };
  const myStyle3 = {
    fontFamily: "Sans-Serif",
    fontSize :"40px"
  };
  const myStyle4 = {
    backgroundColor : "lightgreen"
  };

  Axios.get("http://localhost:3333/order").then((response) => {
      setOrder(response.data);
    });

  const updateStatus = (id) => {
      Axios.put("http://localhost:3333/update", { status: "เสร็จสิ้น" , orderID: id }).then(
        (response) => {
          setOrder(
            order.map((val) => {
              return val.orderID == id
                ? {
                    orderID: val.orderID ,
                    amount: val.amount,
                    TotalPrice: val.TotalPrice,
                    status: status,
                    user_id: val.user_id,
                    
                  }
                : val;
            })
          );
        }
      );
    };

    // orderdetail.map((val) => {
    //   return val.orderID == id (
    //     <div style={myStyle2} >
    //       <br></br>
    //       <text style={myStyle2} > {val.menu_name} </text>
    //       <text style={myStyle2} >price : {val.price } bath</text>
    //       <text style={myStyle2} > amount: {val.amount}</text>
    //       <Divider size="10px"></Divider>

    //       </div>
          
    //     );
        
    // })
    const Orderdetail = (id) => {
      Axios.get("http://localhost:3333/orderdetail", {orderID: id }).then((response) => {
        setorderdetail(response.data);
          
      });
    };
    Axios.get("http://localhost:3333/orderalert").then((response) => {
      setorderalert(response.data);
    });


    
  return (
    <>

      <Navbar style={myStyle4} sticky="top"expand="md" >
        <Container>
          <Navbar.Brand >
            <h3 style={myStyle3} >Order</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
           <Nav className="justify-content-right">

           {orderalert.map((val) => {
              return (
                <div >
                  <Badge badgeContent={val.AlertOrder} color="primary">
                    <Nav.Link href="AlertOrder" ><NotificationsIcon/></Nav.Link>
                  </Badge>
            
                  </div>
                  
                );
                
            })}
           
            <Nav.Link  href="History" ><HistoryIcon/></Nav.Link>
            <Nav.Link  href="/" ><LoginIcon/></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      
          {/* ดึงorder */}
          {/* <OrderDetails /> */}
          
            {order.map((val) => {
              return (
                <div style={myStyle2} >
                  <br></br>
                  <text style={myStyle2} > OrderID: {val.orderID} </text>
                  <text style={myStyle2} >amount : {val.amount }</text>
                  <text style={myStyle2} >TotalPrice: {val.TotalPrice} bath</text>

                  {/* รายละเอียดสินค้า */}
                  <IconButton color='success'
                  onClick={() => {Orderdetail(val.orderID)}} >
                  <ListAltIcon/>
                  </IconButton>
                  <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <ListAltIcon/>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                 <text style={{padding:"30px"}} >
                 <b><Chip color='success' label={val.status} ></Chip></b>
                 </text>
                
                   {orderdetail.map((val) => {
                    return (
                      <div style={myStyle2} >
                        <br></br>
                        <text style={myStyle2} > {val.menu_name} </text>
                        <text style={myStyle2} >price : {val.price } bath</text>
                        <text style={myStyle2} > amount: {val.amount}</text>
                        <Divider size="10px"></Divider>

                        </div>
                        
                      );
                      
                    })}
                 <text style={myStyle1} fontSize={10} >
                    <CircularProgress size={15}/>  &nbsp;
                    กำลังเตรียม
                  </text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                  {/* ปุ่มอัพเดท */}
                  <button className="btn btn-warning " 
                  onClick={() => {updateStatus(val.orderID)}}>Update</button>
                  <Divider size="10px"></Divider>
                  </div>
                  
                );
                
            })}

          {orderdetail.map((val) => {
            return(
              <div style={myStyle2} >
                <br></br>
                <text style={myStyle2} > {val.menu_name} </text>
                <text style={myStyle2} >price : {val.price } bath</text>
                <text style={myStyle2} > amount: {val.amount}</text>
                <Divider size="10px"></Divider>

              </div>
                
              );
              
          })}
            
         
    </>
    
    
  );
}

export default OrderEM;



                  
{/*                                      
                  <Chip icon={<HourglassTopRoundedIcon/>}  label="รอยืนยันคำสั่งซื้อ"  />
                  <KeyboardDoubleArrowRightRoundedIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Chip icon={<InventoryRoundedIcon  />} label="ยืนยันคำสั่งซื้อ"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <KeyboardDoubleArrowRightRoundedIcon /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Chip icon={<LocalDiningRoundedIcon />} label="กำลังเตรียม" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <KeyboardDoubleArrowRightRoundedIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Chip icon={<AssignmentTurnedInRoundedIcon />} label="เสร็จสิ้น" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   */}
                  
                    