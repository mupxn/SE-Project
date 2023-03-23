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

function History() {

  const [orderfinish, setorderfinish] = useState([]);
  const myStyle2 = {
    fontFamily: "Sans-Serif",
    padding : "40px"
  };
  Axios.get("http://localhost:3333/orderfinish").then((response) => {
    setorderfinish(response.data);
    });

  return (
    <>
       <Navbar bg="dark" variant="dark" sticky="top"expand="md" >
        <Container>
          <Navbar.Brand >
            <h3>History</h3>
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
        <h5 >Order History</h5>
      </div>
      <div className="d-grid gap-2">
    </div>
    {orderfinish.map((val) => {
              return (
                <div style={myStyle2} >
                  <br></br>
                  <text style={myStyle2} > OrderID: {val.orderID} </text>
                  <text style={myStyle2} >amount : {val.amount }</text>
                  <text style={myStyle2} >TotalPrice: {val.TotalPrice}</text>
                  <b><Chip color='success' label="เสร็จสิ้น" ></Chip></b>
                  
                  <br></br><br></br>
                  <Divider size="10px"></Divider>


                  </div>
                  
                );
                
            })}

    </>
    
  );
}

export default History;
;