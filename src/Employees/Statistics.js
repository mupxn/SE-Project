import React , {useEffect} from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chart from './Chart';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Deposits from './Deposits';
import { useState } from "react";
import Axios from "axios";

export default function Album() {
  const myStyle2 = {
    fontFamily: "Sans-Serif",
    padding : "40px"
  };
  const [datastatic, setstatic] = useState([]);
  Axios.get("http://localhost:3333/static").then((response) => {
    setstatic(response.data);
    });
   
    //logout//
    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        window.location = '/orderem'
    }
    let date = new Date(Date.now());

  return (
    <>
       <Navbar bg="dark" variant="dark" sticky="top"expand="md" >
        <Container>
          <Navbar.Brand >
            <h3>Statistics</h3>
          </Navbar.Brand>
          <Navbar.Toggle />
        <Nav className="justify-content-right">
            {/* //logout// */}
            <Button variant="contained" onClick={handleLogout}><LogoutIcon/></Button>
          </Nav>
          
        </Container>
      </Navbar>
       

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                {datastatic.map((val) => {
                    return (
                      <div style={myStyle2} >
                        <text style={myStyle2} > Menu: {val.menu_name}</text>
                        <text style={myStyle2} > amount : {val.amount } </text>
                        <br></br><br></br>
                            </div>
                        );
                                
                    })}
                </Paper>
              </Grid>
            </Grid>
          
          </Container>
      
    </>
  );
}
