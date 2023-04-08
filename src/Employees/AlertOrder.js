import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from "react";
import Axios from "axios";
import Divider from '@mui/material/Divider';
import { Chip } from '@mui/material';

function AlertOrder() {
  const [order, setOrder] = useState([]);
  const [status, setStatus] = useState("");
  const myStyle2 = {
    fontFamily: "Sans-Serif",
    padding : "40px"
  };
  Axios.get("http://localhost:3333/orderconfirmation").then((response) => {
      setOrder(response.data);
    });
  
    
  const updateStatus = (id) => {
    Axios.put("http://localhost:3333/update", { status: "ยืนยันคำสั่งซื้อ" , orderID: id }).then(
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
    
    <br/>

          {/* ดึงorder */}
          {/* <OrderDetails /> */}
          
          {order.map((val) => {
              return (
                <div style={myStyle2} >
                  <br></br>
                  <text style={myStyle2} > OrderID: {val.orderID} </text>
                  <text style={myStyle2} >amount : {val.amount }</text>
                  <text style={myStyle2} >TotalPrice: {val.TotalPrice}</text>
                  <text style={{padding:"30px"}} >
                 <b><Chip color='error' label={val.status}  ></Chip></b>
                 </text>
                 
{/*                    
                  <Chip icon={<HourglassTopRoundedIcon/>}  label="รอยืนยันคำสั่งซื้อ"  />
                  <KeyboardDoubleArrowRightRoundedIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Chip icon={<InventoryRoundedIcon  />} label="ยืนยันคำสั่งซื้อ"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <KeyboardDoubleArrowRightRoundedIcon /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Chip icon={<LocalDiningRoundedIcon />} label="กำลังเตรียม" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <KeyboardDoubleArrowRightRoundedIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Chip icon={<AssignmentTurnedInRoundedIcon />} label="เสร็จสิ้น" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   */}
                  
                  <button className="btn btn-warning" 
                  // onChange={() => setNewStatus('p')}  
                  onClick={() => {updateStatus(val.orderID)}}>Update</button>
                 
                  <Divider size="10px"></Divider>

                  </div>
                  
                );
                
            })}
    </>
    
  );
}

export default AlertOrder;