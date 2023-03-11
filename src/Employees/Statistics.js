import React , {useEffect} from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function Album() {
    /*********************************** */
    useEffect(() =>{
        const token = localStorage.getItem('token')
        fetch("http://localhost:3333/authen", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer '+token 
            },
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.status=='ok'){
                    //เรียกไปหน้าสถิติ
                    //alert('authen success')
                }
                else{
                    //กลับไปหน้าlogin
                    alert('authen failed')
                    localStorage.removeItem('token');
                    window.location = '/loginem'
                }
            
        
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    },[])

    //logout//
    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        window.location = '/orderem'
    }
  return (
    <>
      <Navbar bg="light" sticky="top"expand="md" variant="light">
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
      
    </>
  );
}
